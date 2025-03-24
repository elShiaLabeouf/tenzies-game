export default function ClockSvg({minuteHandRef, secondHandRef}) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10"></circle>
      
      <g transform="rotate(0, 12, 12)" ref={ minuteHandRef }>
        <line x1="12" y1="12" x2="12" y2="6"/>
      </g>
      
      <g transform="rotate(0, 12, 12)" ref={ secondHandRef }>
        <line x1="12" y1="12" x2="12" y2="5"/>
      </g>
      
      <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
    </svg>
  )
}