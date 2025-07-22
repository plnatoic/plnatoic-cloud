'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';
import ResponseConsole from '@/components/ui/ResponseConsole';

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
  const [showConsole, setShowConsole] = useState(true);

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
      setShowConsole(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
      {horoscope && showConsole && (
        <ResponseConsole data={horoscope} onClose={() => setShowConsole(false)} />
      )}
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

              {/* Horoscope Chart */}
              <div className="bg-gray-900 text-white p-4 rounded-lg font-sans">
                <div className="grid grid-cols-4 grid-rows-4 gap-1 max-w-5xl mx-auto" style={{ gridTemplateRows: 'repeat(4, 9rem)' }}>
                  {(() => {
                    const palacePositions = [
                      'Thìn', 'Tỵ',   'Ngọ',  'Mùi',
                      'Mão',  null,   null,   'Thân',
                      'Dần',  null,   null,   'Dậu',
                      'Sửu',  'Tý',   'Hợi',  'Tuất'
                    ];

                    const palaceByBranch = horoscope.palaces.reduce((acc, p) => {
                      acc[p.earthlyBranch] = p;
                      return acc;
                    }, {} as { [key: string]: any });

                    const chartCells = palacePositions.map((branch, index) => {
                      if (branch === null) {
                        // This logic ensures the center box is rendered only once.
                        if (index === 5) {
                          return (
                            <div key="center-info" className="col-span-2 row-span-2 p-4 border-2 border-purple-500 bg-gray-800/50 flex flex-col justify-center items-center text-center">
                                <h3 className="font-bold text-lg mb-2 text-purple-300">Thông Tin Lá Số</h3>
                                <p className="text-sm">Dương Lịch: {horoscope.solarDate}</p>
                                <p className="text-sm">Âm Lịch: {horoscope.lunarDate}</p>
                                <p className="text-sm">Giờ Sinh: {horoscope.time} ({horoscope.timeRange})</p>
                                <p className="text-sm">Mệnh Chủ: {horoscope.soul}</p>
                                <p className="text-sm">Thân Chủ: {horoscope.body}</p>
                                <p className="text-sm">Ngũ Hành Cục: {horoscope.fiveElementsClass}</p>
                                <p className="text-sm">Con Giáp: {horoscope.zodiac}</p>
                            </div>
                          );
                        }
                        return null; // Render nothing for other null cells
                      }

                      const palace = palaceByBranch[branch];
                      if (!palace) {
                          return <div key={index} className="border border-purple-400/30 bg-gray-800/30"></div>;
                      }

                      const majorStars = palace.majorStars.map((s: any) => s.name).join(', ');
                      const minorStars = palace.minorStars.map((s: any) => s.name).join(', ');
                      let palaceTitle = palace.name.replace('Cung ', '');
                      if (palace.isSoulPalace) palaceTitle += ' (Mệnh)';
                      if (palace.isBodyPalace) palaceTitle += ' (Thân)';

                      return (
                        <Tooltip key={palace.name}>
                          <TooltipTrigger asChild>
                            <div className={`p-2 border border-purple-400/30 bg-gray-800/30 flex flex-col cursor-pointer`}>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span className="font-bold text-purple-300">{palaceTitle}</span>
                                    <span>{palace.heavenlyStem}{palace.earthlyBranch}</span>
                                </div>
                                <div className="flex-grow text-center my-1 space-y-1">
                                    <p className="font-bold text-sm text-yellow-300">{majorStars || ' '}</p>
                                    <p className="text-xs text-gray-200">{minorStars || ' '}</p>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>{palace.changsheng12}</span>
                                    <span>ĐH: {palace.decadal.range.join('-')}</span>
                                </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="p-4 bg-gray-900 border-purple-400 text-gray-50 max-w-xs">
                            <h4 className="font-bold text-lg text-purple-300 mb-2">{palace.name}</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-semibold text-yellow-400">Chính Tinh:</span> {palace.majorStars.map(s => s.name).join(', ') || 'Không'}</p>
                              <p><span className="font-semibold text-gray-300">Phụ Tinh:</span> {palace.minorStars.map(s => s.name).join(', ') || 'Không'}</p>
                              <p><span className="font-semibold text-gray-300">Sao Tốt:</span> {palace.adjectiveStars.filter(s => s.type === 'good').map(s => s.name).join(', ') || 'Không'}</p>
                              <p><span className="font-semibold text-red-400">Sao Xấu:</span> {palace.adjectiveStars.filter(s => s.type === 'bad').map(s => s.name).join(', ') || 'Không'}</p>
                              <Separator className="my-2 bg-purple-400/30" />
                              <p><span className="font-semibold">Vòng Tràng Sinh:</span> {palace.changsheng12}</p>
                              <p><span className="font-semibold">Vòng Bác Sĩ:</span> {palace.boshi12}</p>
                              <p><span className="font-semibold">Vòng Thái Tuế:</span> {palace.jiangqian12}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    });

                    return chartCells;
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </TooltipProvider>
  );
}
