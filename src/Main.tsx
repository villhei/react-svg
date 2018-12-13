import * as React from 'react'
import styled from 'styled-components'
import wordlist from '~/wordlist'

import ControlsContainer from '~/ControlsContainer'
import LinearGradient from '~/Texts/01_linear_gradient'
import AnimatedGradient from '~/Texts/02_radial_gradient'
import PatternedText from '~/Texts/03_pattern_text'
import AnimatedPattern from '~/Texts/04_animated_pattern'
import AnimatedStroke from '~/Texts/05_animated_stroke'
import AnimatedStrokeMulti from '~/Texts/06_animated_stroke_multi'
import ClipPathText from '~/Texts/07_clippath'

const WHITE_SEMI_SOLID = 'rgba(255, 255, 255, 0.9)'
const WHITE_SEMI_TRANSPARENT = 'rgba(255, 255, 255, 0.1)'
const BLACK_SEMI_TRANSPARENT = 'rgba(0, 0, 0, 0.1)'

const PURPLEISH_LESS = '#0f0c29'
const PURPLEISH = '#302b63'
const PURPLEISH_MORE = '#24243e'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top center,
    ${PURPLEISH_LESS} 0%,
    ${PURPLEISH} 50%,
    ${PURPLEISH_MORE} 100%
  );
  text-align: center;
  position: fixed;
  overflow: auto;
  font-family: 'Roboto', sans-serif;
`

const PageTitle = styled.h1`
  color: ${WHITE_SEMI_SOLID};
  font-weight: 400;
`

const ShadowFilter = () => (
  <svg style={{ visibility: 'hidden' }}>
    <defs>
      <filter id="global-shadow" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="0" dy="20" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
  </svg>
)

const ItemTitle = styled.h2`
  color: ${WHITE_SEMI_SOLID};
  font-weight: 400;
`

const Section = styled.div`
  max-width: 80%;
  margin: 30px auto;
  border: 1px solid ${WHITE_SEMI_TRANSPARENT};
  background: ${BLACK_SEMI_TRANSPARENT};
  display: flex;
  flex-direction: column;

  ${ItemTitle} {
    display: block;
  }
`

const randomWord = () => wordlist[Math.floor(Math.random() * wordlist.length)]

type ComponentProps = {
  text: string
  shadow: boolean
  strokeWidth?: number
  fontSize?: number
  color?: string
  colors?: string[]
}

const DEFAULTS: ComponentProps = {
  text: 'foo',
  fontSize: 4.5,
  shadow: true
}

type Config = [string, (props: any) => JSX.Element, ComponentProps]

const COMPONENTS_CONFIGURATION: Array<Config> = [
  [
    'Linear gradient',
    LinearGradient,
    {
      ...DEFAULTS,
      text: randomWord(),
      colors: [WHITE_SEMI_SOLID, WHITE_SEMI_TRANSPARENT]
    }
  ],
  [
    'Animated gradient fill',
    AnimatedGradient,
    {
      ...DEFAULTS,
      text: randomWord(),
      colors: [WHITE_SEMI_SOLID, WHITE_SEMI_TRANSPARENT]
    }
  ],
  [
    'Static pattern fill',
    PatternedText,
    {
      ...DEFAULTS,
      text: randomWord(),
      color: WHITE_SEMI_SOLID
    }
  ],
  [
    'Stroke animation',
    AnimatedStroke,
    {
      ...DEFAULTS,
      text: randomWord(),
      strokeWidth: 4,
      colors: [WHITE_SEMI_SOLID, WHITE_SEMI_TRANSPARENT]
    }
  ],
  [
    'Animated pattern fill',
    AnimatedPattern,
    {
      ...DEFAULTS,
      text: randomWord(),
      color: WHITE_SEMI_SOLID
    }
  ],
  [
    'Multi-color stroke animation',
    AnimatedStrokeMulti,
    {
      ...DEFAULTS,
      strokeWidth: 4,
      text: randomWord(),
      colors: [WHITE_SEMI_SOLID, WHITE_SEMI_TRANSPARENT]
    }
  ],
  [
    'Pattern with clip-path',
    ClipPathText,
    {
      ...DEFAULTS,
      strokeWidth: 5,
      text: randomWord(),
      colors: [PURPLEISH, WHITE_SEMI_TRANSPARENT, WHITE_SEMI_SOLID]
    }
  ]
]

class Main extends React.Component<{}> {
  render() {
    const sections = COMPONENTS_CONFIGURATION.map(
      ([label, Element, props], index: number) => {
        return (
          <Section key={index}>
            <ControlsContainer
              key={index}
              element={Element}
              config={props}
              label={label}
            />
          </Section>
        )
      }
    )
    return (
      <>
        <ShadowFilter />
        <Background>
          <PageTitle>SVG pattern and fill examples</PageTitle>
          {sections}
        </Background>
      </>
    )
  }
}

export default Main
