/**
 * Desenhos de apoio (wireframes) usados nos cards enquanto não há imagem real.
 * São ilustrações genéricas, não capturas de tela de projetos.
 */
const Window = ({ children }) => (
  <>
    <rect x="24" y="20" width="352" height="214" rx="8" fill="#fff" />
    <path d="M24 28a8 8 0 0 1 8-8h336a8 8 0 0 1 8 8v18H24z" fill="#E3E7F0" />
    <circle cx="40" cy="33" r="3.5" fill="var(--ink)" opacity=".28" />
    <circle cx="52" cy="33" r="3.5" fill="var(--ink)" opacity=".28" />
    <circle cx="64" cy="33" r="3.5" fill="var(--ink)" opacity=".28" />
    <rect x="86" y="27" width="190" height="12" rx="6" fill="#fff" />
    {children}
  </>
)

const art = {
  loja: (
    <>
      <rect width="400" height="250" fill="var(--cobalt)" />
      <Window>
        <rect x="40" y="58" width="64" height="9" rx="2" fill="var(--ink)" />
        <rect x="300" y="58" width="60" height="9" rx="4.5" fill="var(--sinal)" />
        {[40, 122, 204, 286].map((x, i) => (
          <g key={x}>
            <rect x={x} y="82" width="74" height="96" rx="5" fill="#EFF1F5" />
            <rect x={x + 14} y="94" width="46" height="54" rx={i % 2 ? 23 : 6} fill={i % 2 ? 'var(--sinal)' : 'var(--cobalt)'} />
            <rect x={x} y="188" width="50" height="6" rx="2" fill="var(--ink)" opacity=".75" />
            <rect x={x} y="201" width="28" height="9" rx="2" fill="var(--sinal)" />
          </g>
        ))}
      </Window>
    </>
  ),
  cardapio: (
    <>
      <rect width="400" height="250" fill="var(--sinal)" />
      <Window>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="40" y={62 + i * 34} width="26" height="26" rx="5" fill="#EFF1F5" />
            <rect x="76" y={65 + i * 34} width={104 - (i % 3) * 14} height="7" rx="2" fill="var(--ink)" opacity=".8" />
            <rect x="76" y={78 + i * 34} width="70" height="5" rx="2" fill="var(--ink)" opacity=".3" />
            <rect x="198" y={68 + i * 34} width="22" height="8" rx="2" fill="var(--cobalt)" />
          </g>
        ))}
        <rect x="244" y="58" width="116" height="164" rx="6" fill="var(--ink)" />
        <rect x="258" y="74" width="60" height="7" rx="2" fill="#fff" />
        <rect x="258" y="94" width="88" height="5" rx="2" fill="#fff" opacity=".4" />
        <rect x="258" y="108" width="74" height="5" rx="2" fill="#fff" opacity=".4" />
        <rect x="258" y="122" width="82" height="5" rx="2" fill="#fff" opacity=".4" />
        <rect x="258" y="190" width="88" height="22" rx="5" fill="var(--sinal)" />
      </Window>
    </>
  ),
  institucional: (
    <>
      <rect width="400" height="250" fill="var(--ink)" />
      <Window>
        <rect x="40" y="58" width="48" height="8" rx="2" fill="var(--ink)" />
        {[238, 270, 302, 334].map((x) => (
          <rect key={x} x={x} y="59" width="22" height="6" rx="2" fill="var(--ink)" opacity=".3" />
        ))}
        <rect x="40" y="80" width="320" height="82" rx="6" fill="var(--cobalt)" />
        <rect x="58" y="98" width="150" height="12" rx="3" fill="#fff" />
        <rect x="58" y="118" width="110" height="12" rx="3" fill="#fff" />
        <rect x="58" y="142" width="54" height="12" rx="6" fill="var(--sinal)" />
        <circle cx="304" cy="121" r="30" fill="#fff" opacity=".18" />
        {[40, 148, 256].map((x) => (
          <g key={x}>
            <rect x={x} y="176" width="104" height="46" rx="5" fill="#EFF1F5" />
            <rect x={x + 10} y="187" width="50" height="6" rx="2" fill="var(--ink)" opacity=".7" />
            <rect x={x + 10} y="200" width="78" height="5" rx="2" fill="var(--ink)" opacity=".25" />
          </g>
        ))}
      </Window>
    </>
  ),
  evento: (
    <>
      <rect width="400" height="250" fill="#C9D1FA" />
      <Window>
        <rect x="40" y="62" width="320" height="160" rx="6" fill="var(--ink)" />
        <rect x="58" y="80" width="92" height="64" rx="5" fill="var(--sinal)" />
        <rect x="70" y="94" width="68" height="10" rx="3" fill="var(--ink)" />
        <rect x="70" y="112" width="44" height="10" rx="3" fill="var(--ink)" opacity=".5" />
        <rect x="170" y="82" width="150" height="10" rx="3" fill="#fff" />
        <rect x="170" y="102" width="112" height="6" rx="3" fill="#fff" opacity=".4" />
        <rect x="170" y="116" width="128" height="6" rx="3" fill="#fff" opacity=".4" />
        <rect x="58" y="164" width="78" height="30" rx="15" fill="var(--cobalt)" />
        <rect x="148" y="164" width="78" height="30" rx="15" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2" />
      </Window>
    </>
  ),
}

export default function ProjectArt({ kind }) {
  return (
    <svg className="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
      {art[kind] ?? art.institucional}
    </svg>
  )
}
