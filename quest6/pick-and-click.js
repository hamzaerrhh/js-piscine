export const pick = () => {
    // Create display elements
    const hslDiv = document.createElement('div')
    hslDiv.className = 'hsl'

    const hueDiv = document.createElement('div')
    hueDiv.className = 'hue'

    const luminosityDiv = document.createElement('div')
    luminosityDiv.className = 'luminosity'

    document.body.append(hslDiv, hueDiv, luminosityDiv)

    // Mouse move
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX
        const y = e.clientY

        const width = window.innerWidth
        const height = window.innerHeight

        // Convert mouse position
        const hue = Math.round((x / width) * 360)
        const luminosity = Math.round((y / height) * 100)

        const hsl = `hsl(${hue}, 50%, ${luminosity}%)`

        // Change background
        document.body.style.background = hsl

        // Display values
        hslDiv.textContent = hsl
        hueDiv.textContent = `hue: ${hue}`
        luminosityDiv.textContent = `luminosity: ${luminosity}`

        // Move SVG axis lines
        const axisX = document.getElementById('axisX')
        const axisY = document.getElementById('axisY')

        if (axisX) {
            axisX.setAttribute('x1', x)
            axisX.setAttribute('x2', x)
        }

        if (axisY) {
            axisY.setAttribute('y1', y)
            axisY.setAttribute('y2', y)
        }
    })

    document.addEventListener('click', () => {
        navigator.clipboard.writeText(hslDiv.textContent)
    })
}

const svgNS = 'http://www.w3.org/2000/svg'

// Create SVG
const svg = document.createElementNS(svgNS, 'svg')

svg.setAttribute('width', '100%')
svg.setAttribute('height', '100%')

svg.style.position = 'fixed'
svg.style.top = '0'
svg.style.left = '0'
svg.style.pointerEvents = 'none'

document.body.appendChild(svg)

// Vertical line
const axisX = document.createElementNS(svgNS, 'line')

axisX.setAttribute('id', 'axisX')

axisX.setAttribute('y1', '0')
axisX.setAttribute('y2', window.innerHeight)

axisX.setAttribute('stroke', 'white')

svg.appendChild(axisX)

// Horizontal line
const axisY = document.createElementNS(svgNS, 'line')

axisY.setAttribute('id', 'axisY')

axisY.setAttribute('x1', '0')
axisY.setAttribute('x2', window.innerWidth)

axisY.setAttribute('stroke', 'white')

svg.appendChild(axisY)