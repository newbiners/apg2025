import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PagesContainer } from "../../components";
import APG from "../../assets/apg horizontal.png";
import img_1 from "../../assets/img-1.jpg";
import img_2 from "../../assets/img-2.jpg";

const Home = () => {
  const [difference, setDifference] = useState(null);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  // const calculateDaysUntil = () => {
  //   const today = new Date(); // Tanggal hari ini
  //   const targetDate = new Date(today.getFullYear(), today.getMonth(), 30); // Tanggal 30 bulan ini

  //   if (today.getDate() > 30) {
  //     targetDate.setMonth(targetDate.getMonth() + 1); // Gunakan tanggal 30 bulan berikutnya
  //   }

  //   const timeDifference = targetDate.getTime() - today.getTime(); // Selisih waktu dalam milidetik
  //   const totalSeconds = Math.ceil(timeDifference / 1000); // Konversi ke detik

  //   setDifference(totalSeconds);
  // };

  const calculateDaysUntil = () => {
    const today = new Date(); // Tanggal dan waktu saat ini
    const targetDate = new Date(2025, 0, 11); // 11 Januari 2025, pukul 08:00 pagi

    const timeDifference = targetDate.getTime() - today.getTime(); // Selisih waktu dalam milidetik
    const totalSeconds = Math.ceil(timeDifference / 1000); // Konversi ke detik

    setDifference(totalSeconds);
  };

  useEffect(() => {
    calculateDaysUntil();
  }, []);

  return (
    <PagesContainer>
      <div>
        <div className="flex flex-col items-center justify-center h-3/4 mt-8 sm:mt-0 sm:h-screen">
          <img src={APG} alt="logo" className="w-44 sm:w-80" />
        </div>

        <div className="flex items-center flex-col sm:flex-row justify-center gap-9 sm:gap-36">
          <div>
            <h1 className="text-2xl mt-14 sm:mt-0 sm:text-4xl sm:mb-4 font-bold sm:text-start text-center">
              Dasa Darma Pramuka
            </h1>
            <ol className="text-sm sm:text-start text-center sm:text-xl">
              <li>Taqwa kepada Tuhan Yang Maha Esa</li>
              <li>Cinta alam dan kasih sayang sesama manusia</li>
              <li>Patriot yang sopan dan kesatria</li>
              <li>Patuh dan suka bermusyawarah</li>
              <li>Rela menolong dan tabah</li>
              <li>Rajin, terampil dan gembira</li>
              <li>Hemat, cermat dan bersahaja</li>
              <li>Disiplin, berani dan setia</li>
              <li>Bertanggung jawab dan dapat dipercaya</li>
              <li>Suci dalam pikiran, perkataan dan perbuatan</li>
            </ol>
          </div>
          <img src={img_1} alt="img_1" className="w-36 sm:w-80" />
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center gap-9 sm:gap-36 mt-14 sm:mt-28">
          <div className="block sm:hidden">
            <h1 className=" font-bold text-center text-2xl">Tri Satya</h1>
            <ol className="text-sm text-center w-64">
              <li>Demi kehormatanku, aku berjanji akan bersungguh-sungguh:</li>
              <ol type="a">
                <li>
                  Menjalankan kewajibanku terhadap Tuhan, Negara Kesatuan
                  Republik Indonesia, dan mengamalkan Pancasila
                </li>
                <li>
                  Menolong sesama hidup dan mempersiapkan diri membangun
                  masyarakat
                </li>
                <li>Menepati Dasa Darma</li>
              </ol>
            </ol>
          </div>
          <img src={img_2} alt="img_2" className="w-36 sm:w-80" />
          <div className="hidden sm:block">
            <h1 className="text-4xl font-bold">Tri Satya</h1>
            <ol>
              <li>Demi kehormatanku, aku berjanji akan bersungguh-sungguh:</li>
              <ol type="a">
                <li>
                  Menjalankan kewajibanku terhadap Tuhan, Negara Kesatuan
                  Republik Indonesia, dan mengamalkan Pancasila
                </li>
                <li>
                  Menolong sesama hidup dan mempersiapkan diri membangun
                  masyarakat
                </li>
                <li>Menepati Dasa Darma</li>
              </ol>
            </ol>
          </div>
        </div>

        <div className="mt-20 sm:mt-36">
          <h1 className="text-2xl sm:text-4xl font-bold text-center text-[#008080]">
            LET's GO APG 2025
          </h1>
        </div>
        {difference !== null && (
          <div className="flex items-center justify-center mt-10 sm:mt-16">
            <CountdownCircleTimer
              isPlaying
              duration={difference} // 30 hari dalam detik
              colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
              onComplete={() => {
                console.log("Countdown selesai!");
                return { shouldRepeat: false }; // Tidak mengulangi timer
              }}>
              {({ remainingTime }) => (
                <h2 className="text-xl font-bold">
                  {formatTime(remainingTime)}
                </h2>
              )}
            </CountdownCircleTimer>
          </div>
        )}
      </div>
    </PagesContainer>
  );
};

export default Home;
