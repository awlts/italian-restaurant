import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/assets/images/ワインと人気メニュー.jpg"
        >
          <source src="/assets/videos/ワイン.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Italian CIT</h1>
          <p className="hero-subtitle">普段使いの気取らない贅沢しませんか？</p>
          <p className="hero-text">幸せを呼ぶ…ワインと国産牛肉とチーズの美味しいお店</p>
        </div>
      </section>

      {/* Link Cards Section */}
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            <Link to="/concept" className="link-card">
              <div className="card">
                <div className="card-image-wrapper">
                  <img src="/assets/images/内装1.jpg" alt="Concept" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Concept & Features</h3>
                  <p className="card-text">お店のコンセプトと5つのこだわり</p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>

            <Link to="/menu" className="link-card">
              <div className="card">
                <div className="card-image-wrapper">
                  <img src="/assets/images/こだわり3コース料理.jpg" alt="Menu" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Menu</h3>
                  <p className="card-text">コスパ最高のコースメニュー</p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>

            <Link to="/access" className="link-card">
              <div className="card">
                <div className="card-image-wrapper">
                  <img src="/assets/images/外観.jpg" alt="Access" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Access</h3>
                  <p className="card-text">店舗情報・アクセス</p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* GIF Section */}
      <section className="gif-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Welcome to CIT</h2>
            <p className="section-subtitle">厳選されたワインと共に、特別なひとときを</p>
          </div>
          <div className="gif-container">
            <img src="/assets/images/wine_animation.gif" alt="ワインアニメーション" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
