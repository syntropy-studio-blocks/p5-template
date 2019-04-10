import p5 from 'p5'

export const run = ({ state, element, events, iteration }) => {
	state.width = element.clientWidth
  state.height = 500
      
  new p5(s => {
    state.s = s
    
    s.setup = () => {
      const { CENTER } = s
      
      s.createCanvas(state.width, state.height)
      s.noLoop()
      s.rectMode(CENTER)
    }
  }, element)
}

export const update = ({ state, element, events, iteration }) => {
  const { s } = state

  s.ellipse(100,100,80,80)
}
