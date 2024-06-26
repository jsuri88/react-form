import {require_react} from './chunk-DP4DR4LA.js'
import {__toESM} from './chunk-Z4NRYNHR.js'
var React = __toESM(require_react(), 1),
  IconWrapper = ({icon, color: colorProp, size: sizeProp, ...restProps}) => {
    let color = colorProp || 'currentColor',
      size = sizeProp || '14px'
    return React.createElement(
      'span',
      {
        role: 'img',
        'aria-hidden': 'true',
        style: {
          color,
          width: size,
          height: size,
          display: 'inline-flex',
          fontSize: 'inherit',
        },
        ...restProps,
      },
      icon
    )
  }
export {IconWrapper}
