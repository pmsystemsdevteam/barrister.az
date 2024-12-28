import React from 'react'
import './upcomingSection.scss'
import { useTranslation } from 'react-i18next';

function UpcomingSection() {
    const { t } = useTranslation();
  
  return (
    <section id='upcomingSection'>
      <div className="upBox">
        <div className="line"></div>
        <p>{t("Service")}</p>
      </div>
      <div className="downBox">
        <div className="cart">
          <div className="middleBox">
            <h1>Korporativ və İflas Hüququ</h1>
            <span>Bizim korporativ hüquq xidmətlərimiz müştərilərimizin ehtiyaclarına və Azərbaycan qanunvericiliyinə uyğun olaraq, müxtəlif istiqamətlidir və ən uğurlu təcrübələrə söykənir.

              Xidmətlərimiz bizdən tələb olunan korporativ və şirkət hüququ məsələsinin bütün hüquqi və vergi tənzimləmələrini nəzərə alaraq, real həyat təcrübələrinə əsaslanır. Xidmətlərimiz hüquqi şəxslərin birləşdirilməsindən başlayaraq restruktizasiyası (yenidən təşkili), birləşməsi və qoşulması, hüquqi şəxsin müflisləşməsi və ləğv olunmasına qədər, korporativ və hüquqi şəxslərə dair qanunvericiliyinin bütün aspektlərini əhatə edir.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Bank və Maliyyə</h1>
            <span>Mülki Məcəllədən əlavə, bu sahə əsasən Banklar haqqında Qanun, Bank olmayan Kredit Təşkilatları haqqında Qanun, Azərbaycan Mərkəzi Bankı haqqında Qanun, Qiymətli Kağızlar Bazarı haqqında Qanun, Sığorta haqqında Qanun, Valyutanın Tənzimlənməsi haqqında Qanun, İnvestisiya Fondları haqqında Qanun, İnvestisiya Fəaliyyəti haqqında Qanun, və bu qanunvericilik aktlarına əsaslanan, əsasən Mərkəzi Bank tərəfindən qəbul edilən digər qərarlarla tənzimlənir.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Neft və Qaz Hüququ</h1>
            <span>Azərbaycanda neft sənayesinin tənzimlənməsi həm yerli qanunvericili, həm də beynəlxalq sazişlər əsasında həyata keçirilir.

              Yerli qanunvericilik beynəlxalq müqavilələrdə nəzərdə tutulmuş hədlər çərçivəsində tətbiq olunur. Başqa sözlə, Azərbaycan hökuməti tərəfindən imzalanmış beynəlxalq müqavilələr və sazişlər yerli qanunlardan üstündür.

              Azərbaycan Konstitusiyasına əsasən, təbii sərvətlər fiziki və ya hüquqi şəxslərin hüquq və mənafelərinə xələl gətirmədən Azərbaycan Respublikasına məxsusdur. “Yerin təki haqqında” qanun, “Energetika haqqında” qanun və “Enerji resurslarından istifadə haqqında” qanun bu sahədə əsas qanunvericilik aktlarını təşkil edir.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Müqavilələrin Tərtibi</h1>
            <span>Azərbaycan hüquq sistemi Sovet İttifaqından miras qalan qitə hüquq sisteminə əsaslanır. Buna görə də kontinental müqavilə hüququnun bütün əsas elementləri Azərbaycanda mövcuddur. Ümumi hüquq sistemindən fərqli olaraq, kontinental hüquq sistemi presedent hüququna əsaslanmır, burada yalnız Konstitusiya Məhkəməsinin presedentləri hüquqi qüvvəyə malik olur. Bundan əlavə, əksər qitə hüquq sistemlərində olduğu kimi, müqaviləyə qədər olan mərhələ Azərbaycan müqavilələr hüququnun məcburi elementi deyildir.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Əmək Hüququ</h1>
            <span>Azərbaycanda əmək və məşğulluq qanunları işəgötürənlər üçün tələb kimi minimum standartları müəyyən edir, iş rejimi və şərtlərini ciddi şəkildə tənzimləyir. İşəgötürən və işçi əmək müqaviləsi ilə işçi üçün daha əlverişli şərtlər barədə razılığa gələ bilər; lakin bu Məcəllə ilə müəyyən edilmiş minimal  standartların məhdudlaşdırılması ilə bağlı hər hansı bir razılaşma qüvvəsi yoxdur.

              İşçinin İş rejimi, illik məzuniyyət, minimum əmək haqqı, maksimum iş saatı, əmək müqaviləsinin xitamı şərtləri və kompensasiya (müavinətlər) Azərbaycanın Əmək Məcəlləsi ilə tənzimlənən müxtəlif məsələlərdəndir.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Vergi Məsləhətləri və Mühasibatlıq Xidmətləri</h1>
            <span>Azərbaycanda son vergi qanunvericiliyi islahatları nağdsız hesablaşmaların və şəffaflığın təşviqi ilə xarakterizə olunur. Bu gün bizneslər daha yaxşı vergi planlaması və təşkilini axtarırlar ki, hazırki dəyişikliklərə uyğunlaşa bilsinlər. Xüsusilə, bir çox sahibkarlar mümkün vergi güzəştlərindən və azadolmalarından kifayət qədər məlumatlı deyillər. Biz müştərinin vergi və gömrük qanunvericiliyinə uyğun fəaliyyət göstərməsini, habelə vergi və gömrük qanunvericiliyində nəzərdə tutulmuş güzəştlərdən faydalanmasını təmin edirik.</span>
          </div>
        </div>
        <div className="cart">
          <div className="middleBox">
            <h1>Tikinti Hüququ</h1>
            <span>Tikinti hüququnun təbiətindən irəli gəldiyi kimi, Azərbaycan qanunvericiliyi də bu sahədə  olan problemlərə asan həllər təmin etmir. Tikinti üzrə qaydalar, Müqavilə, əmək, zərərvurma və digər hüquq sahələrinin qarışığı olmaqla, tikinti və layihələndirmədən irəli gələn işlərin keyfiyyətlə həll edilməsi  peşəkar yanaşma və təcrübə tələb edir. Qeyd etməkdə fayda vardır ki, tikinti və layihələndirmə üzrə işlər hüquq fəaliyyətinin ən çox inzibati işlərlə əlaqəli olan sahəsidir.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingSection