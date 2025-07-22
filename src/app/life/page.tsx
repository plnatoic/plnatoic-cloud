'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';

interface HoroscopeData {
  solarDate: string;
  lunarDate: string;
  chineseDate: string;
  time: string;
  timeRange: string;
  sign: string;
  zodiac: string;
  fiveElementsClass: string;
  earthlyBranchOfSoulPalace: string;
  earthlyBranchOfBodyPalace: string;
  soul: string;
  body: string;
  palaces: Array<{
    name: string;
    heavenlyStem: string;
    earthlyBranch: string;
    majorStars: Array<{ name: string }>;
    minorStars: Array<{ name: string }>;
    adjectiveStars: Array<{ name: string }>;
    changsheng12: string;
    boshi12: string;
    jiangqian12: string;
    suiqian12: string;
    decadal: { range: number[] };
    ages: number[];
    isSoulPalace: boolean;
    isBodyPalace: boolean;
    isOriginalPalace: boolean;
  }>;
}

export default function LifePage() {
  const [birthDate, setBirthDate] = useState('');
  const [birthHour, setBirthHour] = useState('');
  const [gender, setGender] = useState('');
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/horoscope', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          birthDate,
          birthHour: parseInt(birthHour),
          gender,
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể tính lá số tử vi');
      }

      const data = await response.json();
      setHoroscope(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Lá Số Tử Vi</h1>
            <p className="text-muted-foreground">
              Nhập thông tin sinh của bạn để xem bản đồ sao tử vi chi tiết
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Thông Tin Sinh</CardTitle>
              <CardDescription>
                Vui lòng nhập đầy đủ thông tin để có kết quả chính xác nhất
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Ngày sinh (Dương lịch)</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthHour">Giờ sinh</Label>
                    <Select value={birthHour} onValueChange={setBirthHour} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giờ sinh" />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={hour} value={hour.toString()}>
                            {hour.toString().padStart(2, '0')}:00
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Giới tính</Label>
                    <Select value={gender} onValueChange={setGender} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giới tính" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Nam</SelectItem>
                        <SelectItem value="female">Nữ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Đang tính toán...' : 'Xem Lá Số Tử Vi'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {horoscope && (
            <div className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-red-600">
                    Lá Số Tử Vi Và Bình Giải: {horoscope.solarDate}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-lg font-semibold">
                      <span className="text-blue-600">Dương lịch:</span> {horoscope.solarDate} | 
                      <span className="text-blue-600">Âm lịch:</span> {horoscope.lunarDate}
                    </div>
                    <div className="text-md">
                      <span className="text-green-600">Tứ trụ:</span> {horoscope.chineseDate}
                    </div>
                    <div className="text-md">
                      <span className="text-purple-600">Giờ sinh:</span> {horoscope.time} ({horoscope.timeRange}) | 
                      <span className="text-purple-600">Cung Hoàng Đạo:</span> {horoscope.sign} | 
                      <span className="text-purple-600">Con Giáp:</span> {horoscope.zodiac}
                    </div>
                    <div className="text-md font-medium">
                      <span className="text-red-600">Mệnh:</span> {horoscope.fiveElementsClass} | 
                      <span className="text-red-600">Mệnh chủ:</span> {horoscope.soul} | 
                      <span className="text-red-600">Thân chủ:</span> {horoscope.body}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 12 Palace Grid */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-xl font-bold">
                    📜 BẢN ĐỒ 12 CUNG TỬ VI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-1 max-w-4xl mx-auto">
                    {/* Arrange palaces in traditional tử vi grid layout */}
                    {(() => {
                      // Create a mapping for traditional palace positions
                      const palacePositions = [
                        4, 5, 6, 7,    // Top row: Tỵ, Ngọ, Mùi, Thân
                        3, -1, -1, 8,  // Second row: Thìn, (center), (center), Dậu  
                        2, -1, -1, 9,  // Third row: Mão, (center), (center), Tuất
                        1, 0, 11, 10   // Bottom row: Dần, Sửu, Tý, Hợi
                      ];

                      const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
                      const palaceByBranch: { [key: string]: any } = {};
                      
                      horoscope.palaces.forEach(palace => {
                        palaceByBranch[palace.earthlyBranch] = palace;
                      });

                      return palacePositions.map((pos, index) => {
                        if (pos === -1) {
                          // Center cells - show basic info
                          if (index === 5) {
                            return (
                              <div key={index} className="aspect-square border-2 border-gray-300 p-2 bg-yellow-50 flex flex-col justify-center items-center text-center">
                                <div className="text-lg font-bold text-red-600">LÁ SỐ</div>
                                <div className="text-lg font-bold text-red-600">TỬ VI</div>
                                <div className="text-xs mt-1">
                                  <div>Họ Tên:</div>
                                  <div className="font-semibold">Nguyễn Văn A</div>
                                </div>
                              </div>
                            );
                          } else if (index === 6) {
                            return (
                              <div key={index} className="aspect-square border-2 border-gray-300 p-2 bg-blue-50 flex flex-col justify-center items-center text-center">
                                <div className="text-sm">
                                  <div><span className="font-semibold">Âm Dương:</span></div>
                                  <div className="text-xs">{gender === 'male' ? 'Dương Nam' : 'Âm Nữ'}</div>
                                  <div className="mt-1"><span className="font-semibold">Tuổi:</span></div>
                                  <div className="text-xs">{new Date().getFullYear() - new Date(birthDate).getFullYear()} tuổi</div>
                                  <div className="mt-1"><span className="font-semibold">Ngày Sinh:</span></div>
                                  <div className="text-xs">{horoscope.solarDate}</div>
                                </div>
                              </div>
                            );
                          } else if (index === 9) {
                            return (
                              <div key={index} className="aspect-square border-2 border-gray-300 p-2 bg-green-50 flex flex-col justify-center items-center text-center">
                                <div className="text-sm">
                                  <div><span className="font-semibold">Can Chi:</span></div>
                                  <div className="text-xs">{horoscope.chineseDate}</div>
                                  <div className="mt-1"><span className="font-semibold">Sinh Giờ:</span></div>
                                  <div className="text-xs">{horoscope.time}</div>
                                  <div className="mt-1"><span className="font-semibold">Bản Mệnh:</span></div>
                                  <div className="text-xs">{horoscope.fiveElementsClass}</div>
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <div key={index} className="aspect-square border-2 border-gray-300 p-2 bg-purple-50 flex flex-col justify-center items-center text-center">
                                <div className="text-sm">
                                  <div><span className="font-semibold">Cung Lượng:</span></div>
                                  <div className="text-xs">Tử Vi</div>
                                  <div className="mt-1"><span className="font-semibold">Hạn nằm:</span></div>
                                  <div className="text-xs">Đại Hạn</div>
                                  <div className="mt-1"><span className="font-semibold">Lập lúc:</span></div>
                                  <div className="text-xs">{new Date().toLocaleString('vi-VN')}</div>
                                </div>
                              </div>
                            );
                          }
                        }

                        const branch = earthlyBranches[pos];
                        const palace = palaceByBranch[branch];
                        
                        if (!palace) return <div key={index} className="aspect-square border border-gray-300"></div>;

                        const majorStars = palace.majorStars.map((s: any) => s.name);
                        const minorStars = palace.minorStars.map((s: any) => s.name);
                        const allStars = [...majorStars, ...minorStars].slice(0, 8); // Limit stars to fit

                        let palaceTitle = palace.name;
                        const tags = [];
                        if (palace.isSoulPalace) tags.push('MỆNH');
                        if (palace.isBodyPalace) tags.push('THÂN');
                        if (palace.isOriginalPalace) tags.push('LAI NHÂN');

                        return (
                          <div key={index} className="aspect-square border-2 border-gray-400 p-1 bg-white relative overflow-hidden">
                            {/* Palace name and branch */}
                            <div className="text-center border-b border-gray-300 pb-1 mb-1">
                              <div className="text-xs font-bold text-blue-600">
                                {palace.heavenlyStem}{palace.earthlyBranch}
                              </div>
                              <div className="text-xs font-semibold text-red-600">
                                {palaceTitle.replace('Cung ', '')}
                                {tags.length > 0 && (
                                  <div className="text-xs text-green-600 font-bold">
                                    ({tags.join(',')})
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* Stars */}
                            <div className="text-xs space-y-0.5">
                              {allStars.map((star, starIndex) => (
                                <div key={starIndex} className="text-center leading-tight">
                                  <span className={`${
                                    majorStars.includes(star) 
                                      ? 'text-red-600 font-semibold' 
                                      : 'text-blue-600'
                                  }`}>
                                    {star}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Age range in corner */}
                            <div className="absolute bottom-0 right-0 text-xs bg-yellow-100 px-1 rounded-tl">
                              {palace.decadal.range.join('-')}
                            </div>
                          </div>
                        );
                      });
                    })()
                    }
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Palace Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Chi Tiết Thông Tin 12 Cung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {horoscope.palaces.map((palace: any, index: number) => {
                      const majorStars = palace.majorStars.map((s: any) => s.name).join(', ') || 'Không có';
                      const minorStars = palace.minorStars.map((s: any) => s.name).join(', ') || 'Không có';
                      
                      let palaceTitle = palace.name;
                      const tags = [];
                      if (palace.isSoulPalace) tags.push('MỆNH');
                      if (palace.isBodyPalace) tags.push('THÂN');
                      if (palace.isOriginalPalace) tags.push('LAI NHÂN');
                      if (tags.length > 0) {
                        palaceTitle += ` (${tags.join(', ')})`;
                      }

                      return (
                        <div key={index} className="border rounded-lg p-3 space-y-2 bg-gray-50">
                          <h3 className="font-semibold text-sm text-blue-600">{palaceTitle}</h3>
                          <div className="text-xs space-y-1">
                            <div><strong>Can Chi:</strong> {palace.heavenlyStem}{palace.earthlyBranch}</div>
                            <div><strong>Chính tinh:</strong> <span className="text-red-600">{majorStars}</span></div>
                            <div><strong>Phụ tinh:</strong> <span className="text-blue-600">{minorStars}</span></div>
                            <div><strong>Đại hạn:</strong> {palace.decadal.range.join('-')} tuổi</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
