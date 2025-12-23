const baseUrl = import.meta.env.BASE_URL

function Access() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Access</h1>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Access</h2>
            <p className="section-subtitle">店舗情報</p>
          </div>

          <div className="access-card">
            <h3 className="access-title">イタリアン CIT (シーアイティ)</h3>
            <table className="access-table">
              <tbody>
                <tr>
                  <th>📍 住所</th>
                  <td>〒999-999 奈良氏之市都田沼１２３</td>
                </tr>
                <tr>
                  <th>📞 電話</th>
                  <td><a href="tel:00012345678">000-1234-5678</a></td>
                </tr>
                <tr>
                  <th>🚃 アクセス</th>
                  <td>都田沼駅より徒歩2分</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Store Image */}
          <div style={{ maxWidth: '600px', margin: '3rem auto 0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            <img src={`${baseUrl}assets/images/外観.jpg`} alt="店舗外観" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Access
