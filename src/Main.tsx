import * as React from 'react'
import LinearGradient from '~/Texts/01_linear_gradient'
import AnimatedGradient from '~/Texts/02_radial_gradient'

import styled from 'styled-components'
import PatternedText from '~/Texts/03_pattern_text'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top center,
    #1e5799 0%,
    #2989d8 50%,
    #7db9e8 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  text-align: center;
  position: fixed;
  overflow: auto;
`

const WHITE_SEMI_SOLID = 'rgba(255, 255, 255, 0.9)'
const WHITE_SEMI_TRANSPARENT = 'rgba(255, 255, 255, 0.1)'
const main = () => (
  <>
    <Background>
      <LinearGradient
        fromColor={WHITE_SEMI_SOLID}
        toColor={WHITE_SEMI_TRANSPARENT}
      >
        Basic Gradient
      </LinearGradient>
      <AnimatedGradient
        fromColor={WHITE_SEMI_SOLID}
        toColor={WHITE_SEMI_TRANSPARENT}
      >
        Animated Gradient
      </AnimatedGradient>
      <PatternedText
        color={WHITE_SEMI_SOLID}
      >
        Patterned Text
      </PatternedText>
    </Background>
  </>
)

export default main
