import style from './Spacing.module.scss'
import cs from 'classnames'


type SpacingSize = "regular" | "small" | "x-small" | "2x-small" | "3x-small"
| "large" | "x-large" | "2x-large" | "3x-large" | "4x-large" | "5x-large" | "6x-large"

interface Props {
  size: SpacingSize
}

export function Spacing({ size }: Props) {
  return (
    <hr className={cs(style.spacing, style[`spacing-${size}`])} />
  )
}