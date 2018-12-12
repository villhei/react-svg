import * as React from 'react'
import styled from 'styled-components'

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
const ItemTitle = styled.h2`
  color: ${WHITE_SEMI_SOLID};
  font-weight: 400;
`

const Section = styled.div`
  max-width: 80%;
  margin: 30px auto;
  border-bottom: 1px solid ${WHITE_SEMI_SOLID};
  background: ${BLACK_SEMI_TRANSPARENT};

  svg {
    margin: auto;
    font-weight: 900;
  }
`

const main = () => (
  <>
    <Background>
      <PageTitle>SVG pattern and fill examples</PageTitle>
      <Section>
        <ItemTitle>ClipPath text</ItemTitle>
        <ClipPathText fromColor={PURPLEISH} toColor={WHITE_SEMI_TRANSPARENT}>
          ClipPath text
        </ClipPathText>
      </Section>
      <Section>
        <ItemTitle>Linear gradient fill</ItemTitle>
        <LinearGradient
          fromColor={WHITE_SEMI_SOLID}
          toColor={WHITE_SEMI_TRANSPARENT}
        >
          Basic Gradient
        </LinearGradient>
      </Section>
      <Section>
        <ItemTitle>Animated gradient fill</ItemTitle>
        <AnimatedGradient
          fromColor={WHITE_SEMI_SOLID}
          toColor={WHITE_SEMI_TRANSPARENT}
        >
          Animated Gradient
        </AnimatedGradient>
      </Section>
      <Section>
        <ItemTitle>Static pattern fill</ItemTitle>
        <PatternedText color={WHITE_SEMI_SOLID}>Patterned Text</PatternedText>
      </Section>
      <Section>
        <ItemTitle>Animated pattern fill</ItemTitle>
        <AnimatedPattern color={WHITE_SEMI_SOLID}>
          Animated pattern
        </AnimatedPattern>
      </Section>
      <Section>
        <ItemTitle>Stroke animation</ItemTitle>
        <AnimatedStroke
          fromColor={WHITE_SEMI_SOLID}
          toColor={WHITE_SEMI_TRANSPARENT}
        >
          Animated Stroke
        </AnimatedStroke>
      </Section>
      <Section>
        <ItemTitle>Multi-color stroke animation</ItemTitle>
        <AnimatedStrokeMulti
          colors={[WHITE_SEMI_SOLID, WHITE_SEMI_TRANSPARENT]}
        >
          Multiple Strokes
        </AnimatedStrokeMulti>
      </Section>
    </Background>
  </>
)

export default main
