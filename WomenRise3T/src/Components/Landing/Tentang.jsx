import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tentang() {
  return (
    <div>
        <section className="border-bottom">
        <div className="container px-5 px-md-0 py-5 ">
            {/* <ul className="nav nav-underline">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tentang Kami</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-body-tertiary" href="#">Visi Kami</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-body-tertiary" href="#">Misi Kami</a>
                </li>
                
            </ul>

            <article className="mt-5">
                <p className="button-style-text fw-semibold">What is WomenRise3T?</p>
                <p id="tentang1">
                    
                </p>
                <hr className="my-5" />
                <p className="button-style-text fw-semibold">What do WomenRise3T do?</p>
                <p id="tentang2">
                    
                </p>
            </article> */}

            <Tabs
                variant='underline'
                defaultActiveKey="tentang"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="tentang" title="Tentang" className='tab-style'>
                    <p className="button-style-text fw-semibold">What is WomenRise3T?</p>
                    WomenRise3T adalah sebuah platform yang berfokus pada pemberdayaan perempuan marginal di wilayah 3T (terdepan, terluar, tertinggal) Indonesia melalui program mentorship beasiswa S1. Kami hadir untuk memberikan bimbingan dan dukungan kepada perempuan yang bercita-cita melanjutkan pendidikan tinggi, meskipun mereka berada dalam keterbatasan akses dan kesempatan karena motto kami “Dari 3T, Untuk 3T”.
                    <hr className="my-5" />
                    <p className="button-style-text fw-semibold">What do WomenRise3T do?</p>
                    WomenRise3T adalah platform yang didedikasikan untuk mendukung perempuan dari wilayah 3T (tertinggal, terdepan, terluar) dalam mendapatkan sesi mentoring eksklusif. Kami percaya bahwa setiap perempuan berhak mendapatkan kesempatan untuk berkembang melalui pendidikan. Oleh karena itu, kami menawarkan mentoring khusus untuk perempuan 3T yang telah terdaftar dan terverifikasi. Melalui WomenRise3T, kami berupaya memberikan akses yang lebih luas dan adil bagi perempuan marjinal untuk meraih pendidikan tinggi dan mewujudkan potensi mereka.
                </Tab>
                <Tab eventKey="visi" title="Visi" className='tab-style'>
                    <p className="button-style-text fw-semibold">Visi</p>
                    Memberdayakan perempuan dari wilayah 3T (terdepan, tertinggal, terluar) di Indonesia melalui akses informasi beasiswa dan program mentoring, untuk menciptakan generasi perempuan yang mandiri, berpendidikan, dan berdaya dalam mengatasi tantangan sosial, ekonomi, dan budaya di daerah mereka.
                </Tab>
                <Tab eventKey="misi" title="Misi" className='tab-style'>
                    <p className="button-style-text fw-semibold">Misi</p>
                    <ul>
                        <li>Mentorship untuk Pengembangan Diri: Menyediakan program mentorship yang relevan, di mana mentor dapat membantu perempuan dari wilayah 3T dalam mengembangkan keterampilan akademis, profesional, dan personal melalui bimbingan yang tepat dan inspiratif.</li>
                        <li>Meningkatkan Motivasi dan Kepercayaan Diri: Melalui fitur motivasi yang dipersonalisasi, WomenRise3T bertujuan untuk membangkitkan semangat dan motivasi perempuan untuk terus berjuang mencapai cita-cita mereka, meskipun menghadapi berbagai tantangan.</li>
                        <li>Memfasilitasi Jaringan Kolaborasi: Membangun platform yang memungkinkan mentor dan mentee terhubung secara mudah, menciptakan komunitas yang saling mendukung, di mana para perempuan dapat belajar dan bertumbuh bersama.</li>
                        <li>Menghapus Kesenjangan Gender dan Geografis: Mendorong penghapusan kesenjangan kesempatan pendidikan dan karier antara perempuan di wilayah 3T dan wilayah yang lebih maju, melalui akses ke sumber daya, jaringan, dan pengetahuan.</li>
                    </ul>
                </Tab>
            </Tabs>

            
        </div>
    </section>
    </div>
  )
}

export default Tentang