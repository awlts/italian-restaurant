function Menu() {
  const courses = [
    {
      name: 'カジュアルコース',
      price: '2,980円',
      description: '気軽にお楽しみいただけるリーズナブルなコースです。',
      image: '/assets/images/パテドカンパーニュ.jpg',
      featured: false
    },
    {
      name: 'スタンダードコース',
      price: '3,980円',
      description: '当店一番人気！バランスの取れた満足コース。',
      image: '/assets/images/国産牛ステーキ.jpg',
      featured: true
    },
    {
      name: 'プレミアムコース',
      price: '5,980円',
      description: '特別な日に。厳選食材を使用した贅沢なコース。',
      image: '/assets/images/国産牛ステーキ(イチボ).jpg',
      featured: false
    }
  ]

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Course Menu</h1>
      </div>

      {/* Menu Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Course Menu</h2>
            <p className="section-subtitle">コスパ最高のコースメニュー</p>
          </div>

          <div className="cards-grid">
            {courses.map((course) => (
              <div key={course.name} className={`card menu-card ${course.featured ? 'featured' : ''}`}>
                {course.featured && <span className="menu-badge">人気 No.1</span>}
                <div className="card-image-wrapper">
                  <img src={course.image} alt={course.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{course.name}</h3>
                  <p className="menu-price">{course.price}</p>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">お料理の様子</h2>
            <p className="section-subtitle">シェフが心を込めて作る料理をご覧ください</p>
          </div>
          <div className="video-wrapper">
            <video controls poster="/assets/images/パスタ.jpg">
              <source src="/assets/videos/パスタ.mp4" type="video/mp4" />
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
