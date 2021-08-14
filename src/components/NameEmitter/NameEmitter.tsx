import React, { useReducer, useRef } from 'react'
import { Stage, Text, useTick } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useResizeDetector } from 'react-resize-detector'

import { emitterContainer } from './styles.module.css'

export default function NameEmitter({ name }) {
  const { width, height, ref } = useResizeDetector()

  return (
    <div ref={ref} className={emitterContainer}>
      <Stage width={width} height={height} options={{ antialias: true, backgroundAlpha: 0 }}>
        <Name name={name} canvasWidth={width} canvasHeight={height} />
      </Stage>
    </div>
  )
}

const reducer = (_, update) => update.data

function Name ({ name, canvasWidth, canvasHeight }) {
  const [motion, update] = useReducer(reducer, {})
  const iter = useRef(0)

  useTick(delta => {
    const i = iter.current += (0.05 * delta)
    const newX = Math.sin(i) * (canvasWidth / 2)
    update({
      type: 'update',
      data: {
        x: (canvasWidth / 2) + newX
      }
    })
  })

  return <Text
    {...motion}
    text={name}
    anchor={0.5}
    y={canvasHeight/2}
    style={new TextStyle({
      fill: ['#fff', '#00f'], // gradient
      stroke: '#000',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#fff',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    })}
  />
}