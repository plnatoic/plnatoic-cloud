import { NextRequest, NextResponse } from 'next/server';


// Import iztro library
const iztro = require('iztro');

export async function POST(request: NextRequest) {
  try {
    const { birthDate, birthHour, gender } = await request.json();

    // Validate input
    if (!birthDate || birthHour === undefined || !gender) {
      return NextResponse.json(
        { error: 'Thiếu thông tin cần thiết' },
        { status: 400 }
      );
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
      return NextResponse.json(
        { error: 'Định dạng ngày không hợp lệ. Vui lòng sử dụng YYYY-MM-DD' },
        { status: 400 }
      );
    }

    // Validate hour
    if (birthHour < 0 || birthHour > 23) {
      return NextResponse.json(
        { error: 'Giờ sinh không hợp lệ (0-23)' },
        { status: 400 }
      );
    }

    // Validate gender
    if (!['male', 'female'].includes(gender)) {
      return NextResponse.json(
        { error: 'Giới tính không hợp lệ' },
        { status: 400 }
      );
    }

    // Calculate time index (0 = Tý, 1 = Sửu, ..., 11 = Hợi)
    const timeIndex = Math.floor((birthHour + 1) / 2) % 12;

    // Get horoscope data using iztro library
    const horoscope = iztro.astro.bySolar(birthDate, timeIndex, gender, true, 'vi-VN');



    // Return the horoscope data
    return NextResponse.json(horoscope);

  } catch (error) {
    console.error('Error calculating horoscope:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi tính lá số tử vi' },
      { status: 500 }
    );
  }
}
