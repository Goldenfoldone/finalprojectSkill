import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Ferry from '../assets/font/ferry_black.otf';
import InterBlack from '../assets/font/Inter-Black.otf';
import InterBlackItalic from '../assets/font/Inter-BlackItalic.otf';
import InterBold from '../assets/font/Inter-Bold.otf';
import InterBoldItalic from '../assets/font/Inter-BoldItalic.otf';
import InterExtraBold from '../assets/font/Inter-ExtraBold.otf';
import InterExtraBoldItalic from '../assets/font/Inter-ExtraBoldItalic.otf';
import InterExtraLight from '../assets/font/Inter-ExtraLight.otf';
import InterExtraLightItalic from '../assets/font/Inter-ExtraLightItalic.otf';
import InterItalic from '../assets/font/Inter-Italic.otf';
import InterLight from '../assets/font/Inter-Light.otf';
import InterLightItalic from '../assets/font/Inter-LightItalic.otf';
import InterMedium from '../assets/font/Inter-Medium.otf';
import InterMediumItalic from '../assets/font/Inter-MediumItalic.otf';
import InterRegular from '../assets/font/Inter-Regular.otf';
import InterSemiBold from '../assets/font/Inter-SemiBold.otf';
import InterSemiBoldItalic from '../assets/font/Inter-SemiBoldItalic.otf';
import InterThin from '../assets/font/Inter-Thin.otf';
import InterThinItalic from '../assets/font/Inter-ThinItalic.otf';
import InterVar from '../assets/font/Inter-V.ttf';

export const GlobalStyle = createGlobalStyle`
    /* Ferry */
    @font-face {
        font-family: 'Ferry';
        src: url(${Ferry}) format('opentype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    /* Inter family */
    @font-face {
        font-family: 'Inter';
        src: url(${InterBlack}) format('opentype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBlackItalic}) format('opentype');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBold}) format('opentype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBoldItalic}) format('opentype');
        font-weight: 700;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraBold}) format('opentype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraBoldItalic}) format('opentype');
        font-weight: 800;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraLight}) format('opentype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraLightItalic}) format('opentype');
        font-weight: 200;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterItalic}) format('opentype');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterLightItalic}) format('opentype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterMediumItalic}) format('opentype');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterSemiBold}) format('opentype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterSemiBoldItalic}) format('opentype');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterThin}) format('opentype');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterThinItalic}) format('opentype');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
    }
    /* Inter variable / fallback ttf */
    @font-face {
        font-family: 'InterVar';
        src: url(${InterVar}) format('truetype');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
    }

    /* Base global styles */
    :root {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
        color: #000;
        background: #fff;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
type CapitalTextProps = {
    size?: string | number;
}

export const CapitalText = styled.p<CapitalTextProps>`
        margin: 0;
        margin-top: 69px;
        font-family: "Ferry";
        font-weight: 900;
        font-size: ${props => typeof props.size === 'number' ? `${props.size}px` : (props.size ?? '60px')};
        text-transform: uppercase;
`;