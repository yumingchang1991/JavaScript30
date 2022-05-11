const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#bada55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

const model = {
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  hue: 0,
  lineWidth: 30,
  direction: true
}

const view = {
  draw(e) {
    if (!model.isDrawing) return
    console.log(e)
    ctx.strokeStyle = `hsl(${model.hue}, 100%, 50%)`
    ctx.lineWidth = model.lineWidth
    ctx.beginPath()
    // start from
    ctx.moveTo(model.lastX, model.lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    // update lastX, lastY
    [model.lastX, model.lastY] = [e.offsetX, e.offsetY]
    ctx.stroke()
    
    view.increaseHue()
    view.adjustLineWidth()
    
  },

  increaseHue() {
    model.hue++
    if (model.hue > 360) {
      model.hue = 0
    }
  },
  adjustLineWidth() {
    if (model.lineWidth > 110 || model.lineWidth < 20) {
      model.direction = !model.direction
    }

    if (model.direction) {
      model.lineWidth++
    } else {
      model.lineWidth--
    }
  }
}

const controller = {
  run() {
    canvas.addEventListener('mousemove', view.draw)
    canvas.addEventListener('mousedown', (e) => {
      model.isDrawing = true
      // [model.lastX, model.lastY] = [e.offsetX, e.offsetY]
      model.lastX = e.offsetX
      model.lastY = e.offsetY
    })
    canvas.addEventListener('mouseup', () => model.isDrawing = false)
    canvas.addEventListener('mouseout', () => model.isDrawing = false)
  },
}

controller.run()