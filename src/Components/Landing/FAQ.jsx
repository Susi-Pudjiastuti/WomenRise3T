import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <div>
        <section className="border-bottom">
        <div className="container px-2 px-md-0 py-5 ">
            <h2 className="px-5 pb-3 px-md-0 text-center fw-bold button-style-text">Frequently Asked Question (FAQ)</h2>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Apa yang dimaksud dengan wilayah 3T?</Accordion.Header>
                <Accordion.Body>
                WomenRise3T adalah platform yang menyediakan informasi beasiswa dan sesi mentoring khusus untuk perempuan dari wilayah 3T (tertinggal, terdepan, terluar) di Indonesia."
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Siapa saja yang dapat mendaftar untuk website WomenRise3T?</Accordion.Header>
                <Accordion.Body>
                Semua perempuan dari wilayah 3T yang memenuhi syarat dan dapat memberikan bukti asal wilayahnya.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Bagaimana cara mendapatkan sesi mentoring?</Accordion.Header>
                <Accordion.Body>
                Sesi mentoring hanya tersedia untuk perempuan dari wilayah 3T yang telah terdaftar dan terverifikasi. Setelah diverifikasi, Anda dapat memilih mentor dan mengatur jadwal sesi mentoring.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Apakah layanan mentoring berbayar?</Accordion.Header>
                <Accordion.Body>
                Tidak, layanan mentoring disediakan secara gratis untuk perempuan yang telah terverifikasi sebagai berasal dari wilayah 3T.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Bagaimana cara menghubungi tim WomenRise3T jika saya mengalami masalah?</Accordion.Header>
                <Accordion.Body>
                Anda dapat menghubungi tim kami melalui Whatsapp kami.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Apa syarat menjadi mentor WomenRise 3T?</Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li>Mentor berasal dari 3T.</li>
                    <li>Mentor sedang / sudah menempuh S1 jalur beasiswa.</li>
                    <li>Mentor harus bersedia meluangkan waktu secara sukarela untuk sesi mentorship, dengan komitmen waktu yang disepakati bersama antara mentor dan mentee.</li>
                    <li>Mentor harus memiliki keterampilan komunikasi yang baik serta kemampuan untuk membimbing, mengarahkan, dan memberi nasihat yang konstruktif kepada mentee.</li>
                </ul>


                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header>Apa benefit menjadi mentor?</Accordion.Header>
                <Accordion.Body>
                Menjadi mentor di WomenRise3T memberikan berbagai manfaat, termasuk peluang untuk networking, mendapatkan badge sebagai bukti volunteer yang dapat dimasukkan dalam portofolio, serta meningkatkan kredibilitas dan personal branding yang bermanfaat untuk pengembangan karier. Selain itu, mentor berkesempatan menjadi speaker dalam webinar, yang dapat meningkatkan keterampilan komunikasi dan kepemimpinan. Mentor juga akan merasa puas dan bangga karena telah memberikan dampak positif pada pendidikan, serta memperoleh perspektif baru dari membimbing perempuan di wilayah 3T, yang memperkaya rasa empati mereka.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    </section>

    
    </div>
  )
}

export default FAQ