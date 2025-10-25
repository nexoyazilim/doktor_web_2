import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const blogPosts = {
  'burun-estetigi-kimler-icin': {
    id: 'burun-estetigi-kimler-icin',
    title: 'Burun Estetiği Kimler İçin Uygundur?',
    category: 'Yüz Estetiği',
    description: 'Burun estetiği, burun şeklinden memnun olmayan ve daha güzel bir görünüm isteyen kişiler için uygun bir seçenektir.',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 dk',
    author: 'Dr. Elif Aydın',
    date: '15 Aralık 2024',
    content: `
      <p>Burun estetiği (rinoplasti), burun şeklini ve boyutunu değiştirmek için yapılan cerrahi bir işlemdir. Bu işlem, hem estetik hem de fonksiyonel amaçlarla gerçekleştirilebilir.</p>

      <h2>Burun Estetiği Kimler İçin Uygundur?</h2>
      
      <p>Burun estetiği aşağıdaki durumlarda uygun bir seçenektir:</p>
      
      <ul>
        <li><strong>Estetik Memnuniyetsizlik:</strong> Burun şeklinden memnun olmayan kişiler</li>
        <li><strong>Orantı Problemi:</strong> Yüz ile burun arasında orantı sorunu yaşayanlar</li>
        <li><strong>Doğumsal Anomaliler:</strong> Doğuştan gelen burun şekil bozuklukları</li>
        <li><strong>Travma Sonrası:</strong> Kazalar sonrası burun şeklinde değişiklik olanlar</li>
        <li><strong>Nefes Alma Sorunları:</strong> Burun içi yapısal problemler</li>
      </ul>

      <h2>Burun Estetiği Türleri</h2>
      
      <h3>1. Açık Rinoplasti</h3>
      <p>Burun ucunda küçük bir kesi yapılarak gerçekleştirilen yöntemdir. Daha karmaşık vakalar için tercih edilir.</p>
      
      <h3>2. Kapalı Rinoplasti</h3>
      <p>Tüm kesiler burun içinden yapılır. Daha az iz bırakır ve iyileşme süreci daha hızlıdır.</p>
      
      <h3>3. Revizyon Rinoplasti</h3>
      <p>Daha önce yapılmış burun estetiği operasyonlarının düzeltilmesi için uygulanır.</p>

      <h2>Ameliyat Öncesi Değerlendirme</h2>
      
      <p>Burun estetiği öncesi detaylı bir değerlendirme yapılır:</p>
      
      <ul>
        <li>Fiziksel muayene</li>
        <li>Burun içi yapının incelenmesi</li>
        <li>Fotografik analiz</li>
        <li>Hasta beklentilerinin değerlendirilmesi</li>
        <li>Genel sağlık durumu kontrolü</li>
      </ul>

      <h2>İyileşme Süreci</h2>
      
      <p>Burun estetiği sonrası iyileşme süreci:</p>
      
      <ul>
        <li><strong>İlk Hafta:</strong> Şişlik ve morluklar</li>
        <li><strong>2-3 Hafta:</strong> Şişliklerin azalması</li>
        <li><strong>3-6 Ay:</strong> Burun şeklinin oturması</li>
        <li><strong>1 Yıl:</strong> Final sonuç</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Burun estetiği, doğru hasta seçimi ve deneyimli cerrah ile güvenli ve etkili bir işlemdir. Operasyon öncesi detaylı değerlendirme ve hasta beklentilerinin netleştirilmesi başarılı sonuçlar için kritik önem taşır.</p>
    `
  },
  'vucut-sekillendirme-yontemleri': {
    id: 'vucut-sekillendirme-yontemleri',
    title: 'Vücut Şekillendirme Yöntemleri',
    category: 'Liposuction',
    description: 'Liposuction ile vücut kontürünüzü iyileştirin. Modern teknikler ve güvenli uygulama yöntemleri hakkında bilgi alın.',
    image: 'https://images.pexels.com/photos/6539887/pexels-photo-6539887.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 dk',
    author: 'Dr. Elif Aydın',
    date: '12 Aralık 2024',
    content: `
      <p>Liposuction, vücuttaki lokalize yağ birikimlerinin cerrahi olarak alınması işlemidir. Modern teknikler sayesinde güvenli ve etkili sonuçlar elde edilebilmektedir.</p>

      <h2>Liposuction Teknikleri</h2>
      
      <h3>1. Klasik Liposuction</h3>
      <p>Geleneksel yöntem olan klasik liposuction, küçük kesilerden yağ dokusunun aspire edilmesi işlemidir.</p>
      
      <h3>2. Ultrason Destekli Liposuction (UAL)</h3>
      <p>Ultrasonik enerji kullanılarak yağ dokusunun parçalanması ve kolayca aspire edilmesi sağlanır.</p>
      
      <h3>3. Lazer Destekli Liposuction</h3>
      <p>Lazer enerjisi ile yağ dokusunun eritilmesi ve cilt sıkılaştırılması sağlanır.</p>
      
      <h3>4. VASER Liposuction</h3>
      <p>Gelişmiş ultrasonik teknoloji ile daha hassas ve kontrollü yağ alma işlemi gerçekleştirilir.</p>

      <h2>Hangi Bölgelerde Uygulanır?</h2>
      
      <ul>
        <li><strong>Karın Bölgesi:</strong> Alt ve üst karın</li>
        <li><strong>Bel ve Yanlar:</strong> Love handle bölgesi</li>
        <li><strong>Kalça ve Basen:</strong> Kalça çevresi</li>
        <li><strong>Uyluk:</strong> İç ve dış uyluk</li>
        <li><strong>Kol:</strong> Üst kol içi</li>
        <li><strong>Boyun ve Çene:</strong> Çift çene</li>
      </ul>

      <h2>İdeal Hasta Profili</h2>
      
      <p>Liposuction için ideal hasta:</p>
      
      <ul>
        <li>Genel sağlığı iyi olan</li>
        <li>İdeal kilosuna yakın olan</li>
        <li>Lokalize yağ birikimi olan</li>
        <li>Gerçekçi beklentileri olan</li>
        <li>Sigara kullanmayan</li>
      </ul>

      <h2>Ameliyat Süreci</h2>
      
      <h3>Öncesi</h3>
      <ul>
        <li>Detaylı muayene ve değerlendirme</li>
        <li>Kan testleri</li>
        <li>Fotografik kayıt</li>
        <li>Hasta eğitimi</li>
      </ul>
      
      <h3>Ameliyat Günü</h3>
      <ul>
        <li>Genel anestezi altında</li>
        <li>Küçük kesiler</li>
        <li>Yağ aspire edilmesi</li>
        <li>Kesi kapatılması</li>
      </ul>
      
      <h3>Sonrası</h3>
      <ul>
        <li>Kompresyon giysisi</li>
        <li>İlaç tedavisi</li>
        <li>Takip randevuları</li>
      </ul>

      <h2>İyileşme ve Sonuçlar</h2>
      
      <p><strong>İlk Hafta:</strong> Şişlik ve morluklar, kompresyon giysisi kullanımı</p>
      <p><strong>2-4 Hafta:</strong> Şişliklerin azalması, günlük aktivitelere dönüş</p>
      <p><strong>2-3 Ay:</strong> Final sonuçların görülmeye başlaması</p>
      <p><strong>6 Ay:</strong> Tam iyileşme ve final sonuç</p>

      <h2>Komplikasyonlar ve Riskler</h2>
      
      <p>Liposuction genel olarak güvenli bir işlemdir, ancak şu riskler bulunabilir:</p>
      
      <ul>
        <li>Enfeksiyon</li>
        <li>Kanama</li>
        <li>Asimetri</li>
        <li>Cilt düzensizlikleri</li>
        <li>Anestezi riskleri</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Liposuction, doğru teknik seçimi ve deneyimli cerrah ile vücut kontürünü iyileştiren etkili bir yöntemdir. Hasta seçimi ve beklenti yönetimi başarılı sonuçlar için kritik önem taşır.</p>
    `
  },
  'estetik-cerrahi-riskleri': {
    id: 'estetik-cerrahi-riskleri',
    title: 'Estetik Cerrahi Riskleri ve Önleme Yöntemleri',
    category: 'Cerrahi İşlemler',
    description: 'Estetik cerrahi işlemleri günümüzde güvenli yöntemlerle gerçekleştirilmektedir. Ameliyat öncesi ve sonrası dikkat edilmesi gereken noktalar.',
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 dk',
    author: 'Dr. Elif Aydın',
    date: '10 Aralık 2024',
    content: `
      <p>Estetik cerrahi işlemleri günümüzde gelişmiş teknoloji ve tekniklerle güvenli bir şekilde gerçekleştirilmektedir. Ancak her cerrahi işlemde olduğu gibi belirli riskler bulunmaktadır.</p>

      <h2>Genel Riskler</h2>
      
      <h3>Anestezi Riskleri</h3>
      <ul>
        <li>Genel anesteziye bağlı komplikasyonlar</li>
        <li>Solunum problemleri</li>
        <li>Kalp ritim bozuklukları</li>
        <li>Bulantı ve kusma</li>
      </ul>
      
      <h3>Enfeksiyon Riskleri</h3>
      <ul>
        <li>Operasyon bölgesinde enfeksiyon</li>
        <li>Sistemik enfeksiyon</li>
        <li>Sepsis riski</li>
      </ul>
      
      <h3>Kanama Riskleri</h3>
      <ul>
        <li>Operasyon sırasında kanama</li>
        <li>Operasyon sonrası hematom</li>
        <li>Kan nakli ihtiyacı</li>
      </ul>

      <h2>Estetik Cerrahiye Özel Riskler</h2>
      
      <h3>Asimetri</h3>
      <p>Operasyon sonrası iki taraf arasında farklılık olabilir. Bu durum revizyon operasyonu gerektirebilir.</p>
      
      <h3>Skarlaşma</h3>
      <p>Kötü skarlaşma, özellikle genetik yatkınlığı olan hastalarda görülebilir.</p>
      
      <h3>Duyu Kaybı</h3>
      <p>Operasyon bölgesinde geçici veya kalıcı duyu kaybı olabilir.</p>
      
      <h3>Kan Pıhtısı</h3>
      <p>Derin ven trombozu ve pulmoner emboli riski bulunmaktadır.</p>

      <h2>Risk Azaltma Yöntemleri</h2>
      
      <h3>Ameliyat Öncesi</h3>
      <ul>
        <li><strong>Detaylı Değerlendirme:</strong> Kapsamlı fiziksel muayene</li>
        <li><strong>Laboratuvar Testleri:</strong> Kan sayımı, biyokimya, koagülasyon testleri</li>
        <li><strong>Görüntüleme:</strong> Gerekli durumlarda radyolojik incelemeler</li>
        <li><strong>Hasta Eğitimi:</strong> Operasyon hakkında detaylı bilgilendirme</li>
        <li><strong>Sigara Bırakma:</strong> En az 4 hafta önceden sigara bırakılması</li>
      </ul>
      
      <h3>Ameliyat Sırasında</h3>
      <ul>
        <li><strong>Steril Teknik:</strong> Aseptik koşulların sağlanması</li>
        <li><strong>Deneyimli Ekip:</strong> Uzman cerrah ve anestezi ekibi</li>
        <li><strong>Modern Teknoloji:</strong> Güncel cerrahi aletler ve teknikler</li>
        <li><strong>Monitörizasyon:</strong> Sürekli vital bulgu takibi</li>
      </ul>
      
      <h3>Ameliyat Sonrası</h3>
      <ul>
        <li><strong>Erken Mobilizasyon:</strong> Kan pıhtısı riskini azaltır</li>
        <li><strong>Kompresyon:</strong> Kompresyon giysileri kullanımı</li>
        <li><strong>İlaç Tedavisi:</strong> Antibiyotik ve ağrı kesici kullanımı</li>
        <li><strong>Takip:</strong> Düzenli kontrol randevuları</li>
      </ul>

      <h2>Hasta Seçimi</h2>
      
      <p>Riskleri minimize etmek için ideal hasta profili:</p>
      
      <ul>
        <li>Genel sağlığı iyi olan</li>
        <li>Gerçekçi beklentileri olan</li>
        <li>Sigara kullanmayan</li>
        <li>Kronik hastalığı olmayan</li>
        <li>Psikolojik olarak hazır olan</li>
      </ul>

      <h2>Komplikasyon Yönetimi</h2>
      
      <h3>Erken Dönem Komplikasyonlar</h3>
      <ul>
        <li>Kanama kontrolü</li>
        <li>Enfeksiyon tedavisi</li>
        <li>Ağrı yönetimi</li>
      </ul>
      
      <h3>Geç Dönem Komplikasyonlar</h3>
      <ul>
        <li>Asimetri düzeltilmesi</li>
        <li>Skarlaşma tedavisi</li>
        <li>Revizyon operasyonları</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Estetik cerrahi riskleri, doğru hasta seçimi, deneyimli cerrah ve uygun tekniklerle minimize edilebilir. Hastaların operasyon öncesi detaylı bilgilendirilmesi ve gerçekçi beklentiler oluşturulması başarılı sonuçlar için kritik önem taşır.</p>
    `
  },
  'sac-ekimi-modern-teknikler': {
    id: 'sac-ekimi-modern-teknikler',
    title: 'Saç Ekimi: Modern Teknikler ve Sonuçlar',
    category: 'Saç Ekimi',
    description: 'FUE, FUT ve DHI teknikleri ile saç ekimi. Hangi yöntemin size uygun olduğunu ve beklenen sonuçları öğrenin.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 dk',
    author: 'Dr. Elif Aydın',
    date: '8 Aralık 2024',
    content: `
      <p>Saç ekimi, saç dökülmesi yaşayan kişiler için etkili ve kalıcı bir çözümdür. Modern teknikler sayesinde doğal görünümlü sonuçlar elde edilebilmektedir.</p>

      <h2>Saç Ekimi Teknikleri</h2>
      
      <h3>1. FUE (Follicular Unit Extraction)</h3>
      <p>En popüler teknik olan FUE, tek tek saç foliküllerinin alınması ve ekilmesi işlemidir.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>İz bırakmaz</li>
        <li>Hızlı iyileşme</li>
        <li>Doğal görünüm</li>
        <li>Az ağrı</li>
      </ul>
      
      <h4>Dezavantajları:</h4>
      <ul>
        <li>Daha uzun süre</li>
        <li>Daha maliyetli</li>
        <li>Folikül hasarı riski</li>
      </ul>
      
      <h3>2. FUT (Follicular Unit Transplantation)</h3>
      <p>Strip yöntemi olarak da bilinen FUT, saçlı deriden şerit halinde doku alınması işlemidir.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>Daha fazla greft</li>
        <li>Daha hızlı</li>
        <li>Daha ekonomik</li>
        <li>Folikül korunması</li>
      </ul>
      
      <h4>Dezavantajları:</h4>
      <ul>
        <li>Linear iz</li>
        <li>Uzun iyileşme</li>
        <li>Daha fazla ağrı</li>
      </ul>
      
      <h3>3. DHI (Direct Hair Implantation)</h3>
      <p>Choi kalemi kullanılarak greftlerin doğrudan ekilmesi işlemidir.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>Maksimum greft korunması</li>
        <li>Doğal açı</li>
        <li>Hızlı iyileşme</li>
        <li>Yüksek başarı oranı</li>
      </ul>

      <h2>Hangi Teknik Seçilmeli?</h2>
      
      <p>Teknik seçimi şu faktörlere bağlıdır:</p>
      
      <ul>
        <li><strong>Saç Kaybı Miktarı:</strong> Ne kadar greft gerektiği</li>
        <li><strong>Donör Alan:</strong> Saç yoğunluğu ve kalitesi</li>
        <li><strong>Hasta Tercihi:</strong> İz konusundaki hassasiyet</li>
        <li><strong>Bütçe:</strong> Maliyet faktörü</li>
        <li><strong>Cerrahi Deneyim:</strong> Cerrahın uzmanlığı</li>
      </ul>

      <h2>Saç Ekimi Süreci</h2>
      
      <h3>Öncesi Değerlendirme</h3>
      <ul>
        <li>Saç analizi</li>
        <li>Donör alan değerlendirmesi</li>
        <li>Hasta beklentileri</li>
        <li>Genel sağlık durumu</li>
        <li>Fotografik kayıt</li>
      </ul>
      
      <h3>Operasyon Günü</h3>
      <ul>
        <li>Lokal anestezi</li>
        <li>Greft alma</li>
        <li>Kanal açma</li>
        <li>Greft ekimi</li>
        <li>Bandajlama</li>
      </ul>
      
      <h3>Sonrası Bakım</h3>
      <ul>
        <li>İlk 24 saat yatak istirahati</li>
        <li>Antibiyotik kullanımı</li>
        <li>Özel şampuan kullanımı</li>
        <li>Güneşten korunma</li>
        <li>Düzenli kontroller</li>
      </ul>

      <h2>İyileşme Süreci</h2>
      
      <h3>İlk Hafta</h3>
      <ul>
        <li>Şişlik ve morluklar</li>
        <li>Hafif ağrı</li>
        <li>Koruyucu bandaj</li>
      </ul>
      
      <h3>2-3 Hafta</h3>
      <ul>
        <li>Şişliklerin azalması</li>
        <li>Koruyucu kabukların düşmesi</li>
        <li>Günlük aktivitelere dönüş</li>
      </ul>
      
      <h3>1-3 Ay</h3>
      <ul>
        <li>Saç dökülmesi (shock loss)</li>
        <li>Yeni saç çıkışı başlangıcı</li>
      </ul>
      
      <h3>6-12 Ay</h3>
      <ul>
        <li>Belirgin saç çıkışı</li>
        <li>Doğal görünüm</li>
      </ul>
      
      <h3>12-18 Ay</h3>
      <ul>
        <li>Final sonuç</li>
        <li>Maksimum yoğunluk</li>
      </ul>

      <h2>Başarı Faktörleri</h2>
      
      <ul>
        <li><strong>Deneyimli Cerrah:</strong> Uzmanlık ve deneyim</li>
        <li><strong>Kaliteli Greftler:</strong> Sağlıklı foliküller</li>
        <li><strong>Doğru Teknik:</strong> Hasta için uygun yöntem</li>
        <li><strong>Hasta Uyumu:</strong> Bakım talimatlarına uyum</li>
        <li><strong>Genetik Faktörler:</strong> Saç kalitesi</li>
      </ul>

      <h2>Komplikasyonlar</h2>
      
      <h3>Erken Dönem</h3>
      <ul>
        <li>Enfeksiyon</li>
        <li>Kanama</li>
        <li>Şişlik</li>
        <li>Ağrı</li>
      </ul>
      
      <h3>Geç Dönem</h3>
      <ul>
        <li>Düşük saç çıkışı</li>
        <li>Asimetri</li>
        <li>Kist oluşumu</li>
        <li>Donör alan hasarı</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Saç ekimi, doğru teknik seçimi ve deneyimli cerrah ile başarılı sonuçlar veren bir işlemdir. Hasta seçimi, beklenti yönetimi ve uygun bakım ile optimal sonuçlar elde edilebilir.</p>
    `
  },
  'estetik-cerrahi-iyilesme': {
    id: 'estetik-cerrahi-iyilesme',
    title: 'Estetik Cerrahi Sonrası İyileşme Süreci',
    category: 'Beyin Cerrahisi',
    description: 'Estetik cerrahi sonrası iyileşme sürecinde dikkat edilmesi gereken noktalar ve bakım önerileri.',
    image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 dk',
    author: 'Dr. Elif Aydın',
    date: '5 Aralık 2024',
    content: `
      <p>Estetik cerrahi sonrası iyileşme süreci, operasyonun başarısını doğrudan etkileyen kritik bir dönemdir. Doğru bakım ve takip ile optimal sonuçlar elde edilebilir.</p>

      <h2>İyileşme Dönemleri</h2>
      
      <h3>İlk 24 Saat</h3>
      <ul>
        <li><strong>Dinlenme:</strong> Mutlak yatak istirahati</li>
        <li><strong>Bandaj:</strong> Operasyon bölgesinin korunması</li>
        <li><strong>Ağrı Kontrolü:</strong> Reçeteli ağrı kesiciler</li>
        <li><strong>Sıvı Alımı:</strong> Yeterli hidrasyon</li>
        <li><strong>Soğuk Uygulama:</strong> Şişlik azaltma</li>
      </ul>
      
      <h3>İlk Hafta</h3>
      <ul>
        <li><strong>Şişlik:</strong> Normal ve beklenen bir durum</li>
        <li><strong>Morluk:</strong> Zamanla azalacak</li>
        <li><strong>Hassasiyet:</strong> Dokunma hassasiyeti</li>
        <li><strong>Kısıtlı Aktivite:</strong> Ağır işlerden kaçınma</li>
        <li><strong>İlaç Kullanımı:</strong> Antibiyotik ve ağrı kesici</li>
      </ul>
      
      <h3>2-4 Hafta</h3>
      <ul>
        <li><strong>Şişlik Azalması:</strong> Belirgin iyileşme</li>
        <li><strong>Morluk Kaybolması:</strong> Renk normale dönüş</li>
        <li><strong>Hareket Artışı:</strong> Günlük aktivitelere dönüş</li>
        <li><strong>Dikiş Kontrolü:</strong> Dikişlerin alınması</li>
      </ul>
      
      <h3>1-3 Ay</h3>
      <ul>
        <li><strong>Şekil Oturması:</strong> Final şeklin belirmesi</li>
        <li><strong>Skarlaşma:</strong> İzlerin yumuşaması</li>
        <li><strong>Duyu Geri Dönüşü:</strong> Hissizlik azalması</li>
        <li><strong>Spor Aktivitesi:</strong> Hafif egzersizler</li>
      </ul>
      
      <h3>3-6 Ay</h3>
      <ul>
        <li><strong>Final Sonuç:</strong> Operasyon sonucunun belirmesi</li>
        <li><strong>Tam İyileşme:</strong> Tüm fonksiyonların normale dönüşü</li>
        <li><strong>Normal Aktivite:</strong> Tüm spor ve aktiviteler</li>
      </ul>

      <h2>Bakım Önerileri</h2>
      
      <h3>Genel Bakım</h3>
      <ul>
        <li><strong>Temizlik:</strong> Operasyon bölgesinin temiz tutulması</li>
        <li><strong>Nemlendirme:</strong> Doktor önerisi ile krem kullanımı</li>
        <li><strong>Güneşten Korunma:</strong> SPF 30+ güneş kremi</li>
        <li><strong>Sigara Kaçınma:</strong> İyileşmeyi geciktirir</li>
        <li><strong>Alkol Kaçınma:</strong> İlaç etkileşimi riski</li>
      </ul>
      
      <h3>Beslenme</h3>
      <ul>
        <li><strong>Protein:</strong> İyileşme için gerekli</li>
        <li><strong>Vitamin C:</strong> Kolajen sentezi</li>
        <li><strong>Çinko:</strong> Yara iyileşmesi</li>
        <li><strong>Su:</strong> Yeterli hidrasyon</li>
        <li><strong>Tuz Kısıtlaması:</strong> Şişlik azaltma</li>
      </ul>

      <h2>Dikkat Edilmesi Gerekenler</h2>
      
      <h3>Normal Durumlar</h3>
      <ul>
        <li>Şişlik ve morluk</li>
        <li>Hafif ağrı</li>
        <li>Hassasiyet</li>
        <li>Kaşıntı</li>
        <li>Uyuşukluk</li>
      </ul>
      
      <h3>Acil Durumlar</h3>
      <ul>
        <li><strong>Aşırı Ağrı:</strong> Beklenenden fazla</li>
        <li><strong>Yüksek Ateş:</strong> Enfeksiyon belirtisi</li>
        <li><strong>Kızarıklık:</strong> Artan inflamasyon</li>
        <li><strong>Akıntı:</strong> Enfeksiyon belirtisi</li>
        <li><strong>Kanama:</strong> Kontrolsüz kanama</li>
      </ul>

      <h2>Takip ve Kontroller</h2>
      
      <h3>Kontrol Programı</h3>
      <ul>
        <li><strong>1. Gün:</strong> İlk kontrol</li>
        <li><strong>1. Hafta:</strong> Dikiş kontrolü</li>
        <li><strong>1. Ay:</strong> İyileşme değerlendirmesi</li>
        <li><strong>3. Ay:</strong> Ara sonuç</li>
        <li><strong>6. Ay:</strong> Final değerlendirme</li>
      </ul>
      
      <h3>Fotografik Takip</h3>
      <ul>
        <li>Operasyon öncesi fotoğraflar</li>
        <li>İyileşme süreci kayıtları</li>
        <li>Sonuç karşılaştırması</li>
      </ul>

      <h2>Psikolojik Destek</h2>
      
      <p>İyileşme sürecinde psikolojik destek önemlidir:</p>
      
      <ul>
        <li><strong>Gerçekçi Beklentiler:</strong> Sabırlı olma</li>
        <li><strong>Destek Sistemi:</strong> Aile ve arkadaş desteği</li>
        <li><strong>Profesyonel Yardım:</strong> Gerekirse psikolog</li>
        <li><strong>Pozitif Düşünce:</strong> İyileşme odaklı yaklaşım</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Estetik cerrahi sonrası iyileşme süreci, sabır ve doğru bakım gerektiren bir dönemdir. Doktor talimatlarına uyum, düzenli kontroller ve pozitif yaklaşım ile optimal sonuçlar elde edilebilir.</p>
    `
  },
  'yaslanma-karsiti-estetik': {
    id: 'yaslanma-karsiti-estetik',
    title: 'Yaşlanma Karşıtı Estetik: Botoks ve Dolgu',
    category: 'Non-İnvaziv Estetik',
    description: 'Botoks ve dolgu uygulamaları ile genç görünüm kazanın. Güvenli ve etkili yöntemler hakkında detaylı bilgi.',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 dk',
    author: 'Dr. Elif Aydın',
    date: '3 Aralık 2024',
    content: `
      <p>Yaşlanma karşıtı estetik uygulamalar, cerrahi olmayan yöntemlerle genç ve dinamik bir görünüm elde etmeyi sağlar. Botoks ve dolgu uygulamaları bu alanda en popüler seçeneklerdir.</p>

      <h2>Botoks Uygulaması</h2>
      
      <h3>Botoks Nedir?</h3>
      <p>Botulinum toksin tip A, kas aktivitesini geçici olarak bloke eden bir maddedir. Estetik amaçlı kullanımda yüz kaslarının aşırı kasılmasını önler.</p>
      
      <h3>Uygulama Alanları</h3>
      <ul>
        <li><strong>Alın Çizgileri:</strong> Horizontal çizgiler</li>
        <li><strong>Kaş Arası:</strong> Glabella çizgileri</li>
        <li><strong>Göz Çevresi:</strong> Kaz ayakları</li>
        <li><strong>Burun:</strong> Bunny lines</li>
        <li><strong>Dudak Çevresi:</strong> Smoker's lines</li>
        <li><strong>Boyun:</strong> Platysma bands</li>
      </ul>
      
      <h3>Botoks Süreci</h3>
      <ul>
        <li><strong>Konsültasyon:</strong> Detaylı değerlendirme</li>
        <li><strong>Uygulama:</strong> 15-30 dakika</li>
        <li><strong>Sonuç:</strong> 3-7 gün içinde başlar</li>
        <li><strong>Süre:</strong> 3-6 ay etkili</li>
      </ul>

      <h2>Dolgu Uygulaması</h2>
      
      <h3>Dolgu Nedir?</h3>
      <p>Hyaluronik asit bazlı dolgu maddeleri, cilt altına enjekte edilerek hacim kaybını giderir ve çizgileri doldurur.</p>
      
      <h3>Dolgu Türleri</h3>
      <ul>
        <li><strong>Hyaluronik Asit:</strong> En yaygın kullanılan</li>
        <li><strong>Kalsiyum Hidroksiapatit:</strong> Daha kalıcı</li>
        <li><strong>Polilaktik Asit:</strong> Stimülatör dolgu</li>
      </ul>
      
      <h3>Uygulama Alanları</h3>
      <ul>
        <li><strong>Dudaklar:</strong> Hacim artırma</li>
        <li><strong>Yanaklar:</strong> Dolgunluk</li>
        <li><strong>Çene:</strong> Kontür düzeltme</li>
        <li><strong>Burun:</strong> Non-surgical rhinoplasty</li>
        <li><strong>Göz Altı:</strong> Tear trough</li>
        <li><strong>Alın:</strong> Çizgi doldurma</li>
      </ul>

      <h2>Kombine Uygulamalar</h2>
      
      <h3>Botoks + Dolgu</h3>
      <p>İki yöntemin birlikte kullanılması daha etkili sonuçlar verir:</p>
      
      <ul>
        <li><strong>Üst Yüz:</strong> Botoks ile çizgi önleme</li>
        <li><strong>Alt Yüz:</strong> Dolgu ile hacim artırma</li>
        <li><strong>Dengeli Yaklaşım:</strong> Doğal görünüm</li>
      </ul>
      
      <h3>Diğer Kombinasyonlar</h3>
      <ul>
        <li>Botoks + Mezoterapi</li>
        <li>Dolgu + PRP</li>
        <li>Botoks + Dolgu + Lazer</li>
      </ul>

      <h2>Uygulama Süreci</h2>
      
      <h3>Öncesi</h3>
      <ul>
        <li><strong>Konsültasyon:</strong> Detaylı analiz</li>
        <li><strong>Fotografik Kayıt:</strong> Öncesi fotoğraflar</li>
        <li><strong>Hasta Eğitimi:</strong> Süreç hakkında bilgi</li>
        <li><strong>Kanama Riski:</strong> Aspirin, alkol kaçınma</li>
      </ul>
      
      <h3>Uygulama</h3>
      <ul>
        <li><strong>Anestezi:</strong> Topikal veya buz</li>
        <li><strong>Enjeksiyon:</strong> Hassas teknik</li>
        <li><strong>Masaj:</strong> Dağıtım için</li>
        <li><strong>Buz Uygulama:</strong> Şişlik önleme</li>
      </ul>
      
      <h3>Sonrası</h3>
      <ul>
        <li><strong>İlk 24 Saat:</strong> Masaj kaçınma</li>
        <li><strong>Egzersiz:</strong> 24 saat kaçınma</li>
        <li><strong>Güneş:</strong> Korunma</li>
        <li><strong>Kontrol:</strong> 2 hafta sonra</li>
      </ul>

      <h2>Sonuçlar ve Beklentiler</h2>
      
      <h3>Botoks Sonuçları</h3>
      <ul>
        <li><strong>Başlangıç:</strong> 3-7 gün</li>
        <li><strong>Maksimum:</strong> 2 hafta</li>
        <li><strong>Süre:</strong> 3-6 ay</li>
        <li><strong>Tekrar:</strong> 3-4 ayda bir</li>
      </ul>
      
      <h3>Dolgu Sonuçları</h3>
      <ul>
        <li><strong>Anında:</strong> Hemen görünür</li>
        <li><strong>Final:</strong> 2 hafta</li>
        <li><strong>Süre:</strong> 6-18 ay</li>
        <li><strong>Tekrar:</strong> 1-2 yılda bir</li>
      </ul>

      <h2>Komplikasyonlar</h2>
      
      <h3>Botoks Komplikasyonları</h3>
      <ul>
        <li><strong>Geçici:</strong> Kaş düşüklüğü</li>
        <li><strong>Asimetri:</strong> Tek taraflı etki</li>
        <li><strong>Enfeksiyon:</strong> Nadir</li>
        <li><strong>Allerji:</strong> Çok nadir</li>
      </ul>
      
      <h3>Dolgu Komplikasyonları</h3>
      <ul>
        <li><strong>Şişlik:</strong> İlk günler</li>
        <li><strong>Morluk:</strong> Enjeksiyon yerinde</li>
        <li><strong>Asimetri:</strong> Teknik hatası</li>
        <li><strong>Granülom:</strong> Nadir</li>
      </ul>

      <h2>Hasta Seçimi</h2>
      
      <h3>İdeal Hasta</h3>
      <ul>
        <li>Gerçekçi beklentileri olan</li>
        <li>İyi genel sağlık</li>
        <li>Hamile olmayan</li>
        <li>Emzirmeyen</li>
        <li>Kanama bozukluğu olmayan</li>
      </ul>
      
      <h3>Kaçınılması Gerekenler</h3>
      <ul>
        <li>Aktif enfeksiyon</li>
        <li>Hamilelik</li>
        <li>Emzirme</li>
        <li>Kanama bozukluğu</li>
        <li>Beklenti dışı hastalar</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Botoks ve dolgu uygulamaları, doğru hasta seçimi ve deneyimli uygulayıcı ile güvenli ve etkili sonuçlar veren non-invaziv estetik yöntemlerdir. Kombine kullanım ile daha kapsamlı gençleştirme sağlanabilir.</p>
    `
  }
};

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-xl text-gray-600 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-[#2E8B57] text-white rounded-lg hover:bg-[#2E8B57]/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Blog'a Dön
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${post.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#2E8B57] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">{post.title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#2E8B57] hover:text-[#2E8B57]/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Blog'a Dön
          </Link>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Author Info */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#2E8B57] rounded-full flex items-center justify-center text-white text-xl font-bold">
              EA
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Estetik Cerrahi Uzmanı</p>
              <p className="text-gray-500 text-sm mt-2">
                Estetik cerrahi alanında uzmanlaşmış, hasta memnuniyeti odaklı yaklaşımı ile tanınan cerrah.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">İlgili Yazılar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E8B57] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {relatedPost.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
