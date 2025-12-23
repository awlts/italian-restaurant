const baseUrl = import.meta.env.BASE_URL

function Concept() {
  const features = [
    {
      number: '01',
      title: '豊富な日替わりメニュー',
      description: '旬の美味しいお野菜、魚、お肉で美味しい料理を提供しております。毎日変わるおすすめメニューも大人気です。ワインと一緒にお楽しみ下さい。',
      image: `${baseUrl}assets/images/こだわり1 (2).jpg`
    },
    {
      number: '02',
      title: '気軽に立ち寄れるワイン酒場',
      description: 'ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富です！！オーナーが美味しいと思うワインを取り揃えてます。お気軽にふらっとお立ち寄り下さいね。',
      image: `${baseUrl}assets/images/こだわり2.jpg`
    },
    {
      number: '03',
      title: '美味しいパーティーコース',
      description: 'お得なコースメニューは2980円から3種類ございます。飲み放題付きコースも人気です。女子会、お仲間とのご宴会におすすめです。',
      image: `${baseUrl}assets/images/こだわり3コース料理.jpg`
    },
    {
      number: '04',
      title: 'リーズナブルな日替わりグラスワイン',
      description: 'コスパ最高の美味しいワインを取り揃えております。日替わりグラスワインは580円〜美味しいワインを気軽にお楽しみください。',
      image: `${baseUrl}assets/images/こだわり2または4.jpg`
    },
    {
      number: '05',
      title: '絶品！！CHEESE',
      description: 'ワインとチーズをお楽しみください。オーナーシェフが厳選した絶品チーズを使ったメニューも人気です。',
      image: `${baseUrl}assets/images/こだわり5チーズ料理.jpg`
    }
  ]

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Concept & Features</h1>
      </div>

      {/* Concept Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Concept</h2>
            <p className="section-subtitle">お店について</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-image">
              <img src={`${baseUrl}assets/images/内装2.jpg`} alt="居心地の良い店内" />
            </div>
            <div className="feature-content">
              <h3>居心地の良い店内</h3>
              <p>いつも笑顔が溢れる明るい店内です。初めての方もお気軽にお越しください。</p>
              <p>都田沼駅より徒歩2分とアクセス抜群！！お仕事帰りや大切なパートナー、そしてひとり飲みにも様々なシーンにご利用下さい。</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>✓ 衛生対策は万全</li>
                <li>✓ 旬の食材を使ったコスパ最高美味しい料理</li>
                <li>✓ 自分達が美味しいと思ったワインだけをご用意</li>
                <li>✓ 女子会、記念日、友人とお気軽にどうぞ！！</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Features</h2>
            <p className="section-subtitle">5つのこだわり</p>
          </div>

          {features.map((feature, index) => (
            <div key={feature.number} className={`feature-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-content">
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Concept
