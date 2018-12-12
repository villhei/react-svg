import * as React from 'react'
import styled from 'styled-components'

import LinearGradient from '~/Texts/01_linear_gradient'
import AnimatedGradient from '~/Texts/02_radial_gradient'
import PatternedText from '~/Texts/03_pattern_text'
import AnimatedPattern from '~/Texts/04_animated_pattern'
import AnimatedStroke from '~/Texts/05_animated_stroke'
import AnimatedStrokeMulti from '~/Texts/06_animated_stroke_multi'

const WHITE_SEMI_SOLID = 'rgba(255, 255, 255, 0.9)'
const WHITE_SEMI_TRANSPARENT = 'rgba(255, 255, 255, 0.1)'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top center,
    #1e5799 0%,
    #2989d8 50%,
    #7db9e8 100%
  );
  text-align: center;
  position: fixed;
  overflow: auto;
  font-family: 'Roboto', sans-serif;
`

const ItemTitle = styled.h1`
  color: ${WHITE_SEMI_SOLID};
`

const Section = styled.div`
  max-width: 80%;
  margin: auto;
  border-bottom: 1px solid ${WHITE_SEMI_SOLID};

  svg {
    margin: auto;
    font-weight: 900;
  }
`

const main = () => (
  <>
    <Background>
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
