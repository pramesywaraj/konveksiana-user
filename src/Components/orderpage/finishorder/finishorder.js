import React from 'react';

// Component
import './finishorder.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Finishorder() {
  return (
    <div>
      <Header />
      
      {/* Content Start */}
      <div id="finishorder" className="finishorder">
        <h2>Terima Kasih</h2>
        <p>
          Telah melakukan pemesanan di Konveksiana. Untuk Teknis pembayaran, telah kami sertakan ke Email yang kamu gunakan saat membuat akun.
        </p>
        <p>
          Dimohon untuk segera melakukan pembayaran agar pesanan kamu segera kami kerjakan.
        </p>
        <p>
          Apabila ada pertanyaan, bisa menghubungi admin kami di berbagai media sosial yang tertera.
        </p>
      </div>
      {/* Content End */}

      <Footer />
    </div>
  );
}

export default Finishorder;
