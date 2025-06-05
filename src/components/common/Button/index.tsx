import { cn } from '../../../utils/utils'

type ButtonProps = {
    className?: string
    onClick?: () => void
}

const Button = ({ className, onClick }: ButtonProps) => {
    return <button className={cn('rounded-md bg-blue-500 p-2 text-white', className)} onClick={onClick}></button>
}

export default Button
