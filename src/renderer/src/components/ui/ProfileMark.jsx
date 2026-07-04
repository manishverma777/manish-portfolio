import { useState } from 'react'
import { siteConfig } from '../../utils/config'
import { cn } from '../../utils/cn'

/**
 * Profile photo with graceful fallback to the name logo (initials).
 * Renders the image when `siteConfig.profileImage` loads successfully;
 * otherwise shows the gradient initials.
 */
function ProfileMark({
  className = '',
  textClassName = '',
  rounded = 'rounded-full',
  imgClass = 'object-cover object-center'
}) {
  const [ok, setOk] = useState(Boolean(siteConfig.profileImage))

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        rounded,
        className
      )}
    >
      {ok ? (
        <img
          src={siteConfig.profileImage}
          alt={siteConfig.owner.name}
          onError={() => setOk(false)}
          referrerPolicy="no-referrer"
          draggable={false}
          className={cn('h-full w-full', imgClass)}
        />
      ) : (
        <span className={cn('text-gradient font-black leading-none', textClassName)}>
          {siteConfig.logoInitials}
        </span>
      )}
    </div>
  )
}

export default ProfileMark
