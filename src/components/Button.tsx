import Button from '@mui/material/Button';
import styled from 'styled-components';

// Helper: convert 3- or 6-digit hex to rgba string with provided alpha.
const hexToRgba = (hex?: string, alpha = 1) => {
    if (!hex) return undefined;
    const h = hex.replace('#', '').trim();
    if (!/^[0-9a-fA-F]+$/.test(h)) return undefined;
    let r = 0, g = 0, b = 0;
    if (h.length === 3) {
        r = parseInt(h[0] + h[0], 16);
        g = parseInt(h[1] + h[1], 16);
        b = parseInt(h[2] + h[2], 16);
    } else if (h.length === 6) {
        r = parseInt(h.substring(0,2), 16);
        g = parseInt(h.substring(2,4), 16);
        b = parseInt(h.substring(4,6), 16);
    } else {
        return undefined;
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "text" | "outlined" | "contained";
    bgColor?: string;
    textColor?: string;
    fontSize?: string | number;
    padding?: string;
}
// Use transient props (prefixed with $) so styled-components won't forward them to DOM
type StyledProps = {
    $bgColor?: string;
    $textColor?: string;
    $fontSize?: string | number;
    $padding?: string;
}

const MyButtonStyled = styled(Button)<StyledProps>`
    /* default/base styles applied to root so custom props always have effect */
    && {
        border-radius: 5px;
        padding: ${props => props.$padding ?? '6px 16px'};
        font-size: ${props => typeof props.$fontSize === 'number' ? `${props.$fontSize}px` : (props.$fontSize ?? 'inherit')};
        color: ${props => props.$textColor ?? 'inherit'};
    }

    /* contained variant (filled button) */
    &&.MuiButton-contained {
        background-color: ${props => props.$bgColor ?? '#7CE3E1'};
    }

    &&.MuiButton-contained:hover {
        background-color: ${props => {
            const rgba = hexToRgba(props.$bgColor, 0.5);
            return rgba ?? (props.$bgColor ?? '#027a747d');
        }};
    }

    /* outlined variant */
    &&.MuiButton-outlined {
        background-color: transparent;
        border: 1px solid ${props => props.$bgColor ?? '#029491'};
        color: ${props => props.$textColor ?? props.$bgColor ?? '#029491'};
    }

    &&.MuiButton-outlined:hover {
        background-color: rgba(2,148,145,0.08);
    }

    /* text variant */
    &&.MuiButton-text {
        background-color: transparent;
        color: ${props => props.$textColor ?? '#000000'};
    }
    &&.MuiButton-text:hover {
        background-color: ${props => hexToRgba(props.$bgColor, 0.13) ?? '#027a747d'};
    }

    /* disabled state tweaks */
    &&.Mui-disabled {
        opacity: 0.6;
        pointer-events: none;
    }
`;
        


export const MyButton: React.FC<ButtonProps> =({children, onClick, disabled, type, variant, bgColor, textColor, fontSize, padding}) =>{
        return(
            <MyButtonStyled
                variant={variant}
                onClick={onClick}
                disabled={disabled}
                type={type}
                $bgColor={bgColor}
                $textColor={textColor}
                $fontSize={fontSize}
                $padding={padding}
            >
                {children}
            </MyButtonStyled>
        )
}