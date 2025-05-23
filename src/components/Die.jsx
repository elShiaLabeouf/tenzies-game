import './Die.css'

/**
 * Die component representing a single die in the Tenzi game.
 *
 * @param {Object} props - Component props.
 * @param {React.Ref} props.ref - A reference to the die's DOM element.
 * @param {number} props.currentValue - The current face value of the die.
 * @param {boolean} props.isLocked - Whether the die is locked.
 * @param {Function} props.onClick - Callback function when the die is clicked.
 * @param {string} props.tenziId - The unique ID of the die.
 * @returns {JSX.Element} The rendered die component.
 */
export function Die({ ref, currentValue, isLocked, onClick, tenziId }) {
  return (
    <div className='tenzi-die-container'>
      <div 
        className={ `tenzi-die show-${currentValue}` } 
        ref={ ref } 
        data-locked={ isLocked } 
        data-id={ tenziId } 
        onClick={ onClick } 
        data-value={ currentValue }
        role="button"
        aria-label={`Die with value ${currentValue}${isLocked ? ', locked' : ', unlocked'}`}
        aria-pressed={isLocked}
      >
        <div className='side one'>
          <div className="dot one-1"></div>
        </div>
        <div className='side two'>
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div className='side three'>
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div className='side four'>
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div className='side five'>
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div className='side six'>
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div>
    </div>
  )
}

