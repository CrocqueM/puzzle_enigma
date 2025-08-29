// Fonction inutile pour ajouter de la confusion
function calculateUselessValue() {
  let result = 0
  for (let i = 0; i < 1000; i++) {
    result += Math.random() * Math.PI
  }
  return result
}

// Variable inutile
const FAKE_FLAG = "FLAG{this_is_not_the_real_one}"
const ANOTHER_FAKE = "FLAG{keep_searching}"
const YET_ANOTHER_FAKE = "FLAG{nice_try_but_no}"

// Fonction pour spawn des boutons aléatoires
function spawnRandomButtons() {
  const container = document.getElementById("dynamic-content")
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#fd79a8", "#fdcb6e"]
  const fakeFlags = [
    "FLAG{button_trap_1}",
    "FLAG{not_here_either}",
    "FLAG{keep_clicking}",
    "FLAG{wrong_direction}",
    "FLAG{almost_there_not}",
  ]

  // Code inutile pour la confusion
  calculateUselessValue()

  for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
    const button = document.createElement("button")
    button.className = "dynamic-button"
    button.style.background = colors[Math.floor(Math.random() * colors.length)]
    button.style.color = "white"
    button.textContent = `🎯 ${fakeFlags[Math.floor(Math.random() * fakeFlags.length)]}`

    // Fonction inutile dans l'event listener
    button.onclick = () => {
      performUselessCalculation()
      showFakeFlag()
      if (Math.random() > 0.7) {
        spawnRandomButtons()
      }
    }

    container.appendChild(button)
  }

  // Animation inutile
  container.style.transform = `rotate(${Math.random() * 10 - 5}deg)`
  setTimeout(() => {
    container.style.transform = "rotate(0deg)"
  }, 500)
}

// Fonction inutile pour les calculs
function performUselessCalculation() {
  let useless = 0
  for (let i = 0; i < 100; i++) {
    useless += Math.sin(i) * Math.cos(i) * Math.tan(i)
  }
  console.log("Calcul inutile terminé:", useless)
}

// Fonction pour créer l'effet hydre
function createHydraButtons() {
  const container = document.getElementById("dynamic-content")
  const hydraButton = document.createElement("div")
  hydraButton.innerHTML = `
        <button class="dynamic-button" style="background: #e17055; color: white; font-size: 1.2rem;" onclick="multiplyHydra(this)">
            🐍 HYDRA BUTTON - FLAG{hydra_fake}
        </button>
    `
  container.appendChild(hydraButton)

  // Code verbeux inutile
  const unnecessaryArray = []
  for (let i = 0; i < 50; i++) {
    unnecessaryArray.push(`fake_data_${i}`)
  }
  console.log("Données inutiles générées:", unnecessaryArray)
}

// Fonction pour multiplier les boutons hydre
function multiplyHydra(button) {
  const parent = button.parentElement
  const colors = ["#e17055", "#00b894", "#0984e3", "#6c5ce7", "#fd79a8"]

  // Supprimer le bouton original
  button.remove()

  // Créer 2-4 nouveaux boutons
  const count = Math.floor(Math.random() * 3) + 2
  for (let i = 0; i < count; i++) {
    const newButton = document.createElement("button")
    newButton.className = "dynamic-button"
    newButton.style.background = colors[Math.floor(Math.random() * colors.length)]
    newButton.style.color = "white"
    newButton.textContent = `🐍 HYDRA ${i + 1} - FLAG{hydra_${Date.now()}_${i}}`
    newButton.onclick = function () {
      multiplyHydra(this)
    }
    parent.appendChild(newButton)
  }

  // Code inutile pour la confusion
  performComplexUselessOperation()
}

// Fonction ultra-verbeuse et inutile
function performComplexUselessOperation() {
  const startTime = Date.now()
  const complexResult = {
    value: 0,
    iterations: 0,
    randomData: [],
  }

  for (let i = 0; i < 1000; i++) {
    complexResult.iterations++
    complexResult.value += Math.random() * i

    if (i % 100 === 0) {
      complexResult.randomData.push({
        iteration: i,
        timestamp: Date.now(),
        randomValue: Math.random(),
        fakeFlag: `FLAG{iteration_${i}_fake}`,
      })
    }
  }

  const endTime = Date.now()
  console.log("Opération complexe terminée en", endTime - startTime, "ms")
  console.log("Résultat:", complexResult)
}

// Fonction pour afficher de faux flags
function showFakeFlag() {
  const fakeFlags = [
    "FLAG{gotcha_not_really}",
    "FLAG{close_but_no_cigar}",
    "FLAG{try_harder}",
    "FLAG{wrong_path_buddy}",
    "FLAG{keep_digging}",
    "FLAG{source_code_maybe}",
  ]

  alert(`🎯 FLAG TROUVÉ! 🎯\n\n${fakeFlags[Math.floor(Math.random() * fakeFlags.length)]}\n\n...ou pas 😏`)

  // Code inutile après l'alert
  generateUselessData()
}

// Fonction pour générer des données inutiles
function generateUselessData() {
  const uselessObject = {
    timestamp: Date.now(),
    randomId: Math.random().toString(36).substr(2, 9),
    fakeFlags: [FAKE_FLAG, ANOTHER_FAKE, YET_ANOTHER_FAKE],
    uselessArray: Array.from({ length: 20 }, (_, i) => `useless_${i}`),
    nestedUselessness: {
      level1: {
        level2: {
          level3: {
            deepFakeFlag: "FLAG{deep_but_fake}",
          },
        },
      },
    },
  }

  console.log("Données inutiles générées:", uselessObject)
}

// Fonction pour afficher des popups aléatoires
function showRandomPopup() {
  const popupMessages = [
    "Le flag est dans le code source! 👀",
    "Avez-vous vérifié les commentaires HTML? 🤔",
    "FLAG{popup_trap_lol}",
    "Continuez à chercher! 🔍",
    "Le vrai flag est bien caché... 😈",
  ]

  const overlay = document.createElement("div")
  overlay.className = "popup-overlay"
  overlay.innerHTML = `
        <div class="popup-content">
            <h2>🚨 ALERTE FLAG 🚨</h2>
            <p>${popupMessages[Math.floor(Math.random() * popupMessages.length)]}</p>
            <button class="close-popup" onclick="this.parentElement.parentElement.remove()">Fermer</button>
        </div>
    `

  document.body.appendChild(overlay)

  // Code inutile pour la popup
  setTimeout(() => {
    performUselessCalculation()
  }, 1000)
}

// Fonction pour ajouter des carrousels
function addCarousel() {
  const container = document.getElementById("dynamic-content")
  const fakeData = [
    { code: "FLAG{carousel_fake_1}", icon: "🎪" },
    { code: "base64: RkxBR3tmYWtlX2Nhcm91c2VsfQ==", icon: "🔐" },
    { code: "FLAG{spinning_trap}", icon: "🌀" },
    { code: "md5: " + Math.random().toString(36), icon: "🧮" },
  ]

  const carousel = document.createElement("div")
  carousel.className = "carousel-container"
  carousel.style.marginTop = "20px"

  let carouselHTML = '<div class="carousel">'
  for (let i = 0; i < 6; i++) {
    const item = fakeData[Math.floor(Math.random() * fakeData.length)]
    carouselHTML += `
            <div class="carousel-item">
                <span class="fake-code">${item.code}</span>
                <div class="icon">${item.icon}</div>
            </div>
        `
  }
  carouselHTML += "</div>"

  carousel.innerHTML = carouselHTML
  container.appendChild(carousel)

  // Code verbeux inutile
  const carouselData = {
    id: Date.now(),
    items: fakeData,
    created: new Date().toISOString(),
    uselessMetadata: generateUselessMetadata(),
  }

  console.log("Nouveau carrousel créé:", carouselData)
}

// Fonction pour générer des métadonnées inutiles
function generateUselessMetadata() {
  return {
    version: "1.0.0",
    author: "Fake Flag Generator",
    description: "Générateur de faux flags pour confusion maximale",
    keywords: ["fake", "flag", "trap", "confusion"],
    license: "MIT",
    repository: "https://github.com/fake/fake-flags",
    bugs: "https://github.com/fake/fake-flags/issues",
    homepage: "https://fake-flags.com",
    dependencies: {
      "fake-lib": "^1.0.0",
      "confusion-generator": "^2.1.0",
      "trap-maker": "^0.5.0",
    },
  }
}

// Code d'initialisation verbeux et inutile
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎯 PUZZLE ENIGMA LOADED 🎯")
  console.log("Fake flags initialized:", [FAKE_FLAG, ANOTHER_FAKE, YET_ANOTHER_FAKE])

  // Initialisation de données inutiles
  const initData = {
    startTime: Date.now(),
    userAgent: navigator.userAgent,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled,
    onlineStatus: navigator.onLine,
    platform: navigator.platform,
    fakeFlags: {
      count: 50,
      generated: Array.from({ length: 50 }, (_, i) => `FLAG{auto_fake_${i}}`),
      lastGenerated: Date.now(),
    },
  }

  console.log("Données d'initialisation:", initData)

  // Animation d'entrée inutile
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease"
    document.body.style.opacity = "1"
  }, 100)

  // Génération de bruit de fond
  setInterval(() => {
    generateBackgroundNoise()
  }, 5000)
})

// Fonction pour générer du bruit de fond
function generateBackgroundNoise() {
  const noiseData = {
    timestamp: Date.now(),
    randomValues: Array.from({ length: 10 }, () => Math.random()),
    fakeProcesses: [
      "Scanning for flags...",
      "Decrypting fake data...",
      "Generating confusion...",
      "Loading trap mechanisms...",
      "Initializing fake flags...",
    ],
    systemInfo: {
      memory: Math.floor(Math.random() * 1000) + "MB",
      cpu: Math.floor(Math.random() * 100) + "%",
      network: Math.floor(Math.random() * 1000) + "ms",
    },
  }

  console.log("Background noise:", noiseData)
}

// Variables globales inutiles pour la confusion
const GLOBAL_CONFUSION_LEVEL = 9000
const FAKE_API_ENDPOINT = "https://fake-api.com/flags"
const DECOY_TOKENS = ["abc123", "def456", "ghi789"]
const MISLEADING_HINTS = [
  "Le flag commence par FLAG{",
  "Il y a des underscores dans le flag",
  "Le flag contient des chiffres",
  "Cherchez dans les commentaires",
  "Le flag fait moins de 50 caractères",
]

// Fonction finale inutile
function finalConfusionFunction() {
  return {
    success: false,
    message: "Keep searching!",
    hint: MISLEADING_HINTS[Math.floor(Math.random() * MISLEADING_HINTS.length)],
    fakeFlag: `FLAG{final_confusion_${Date.now()}}`,
  }
}

// Header explosion effect
function headerExplosion() {
  const header = document.querySelector(".flashy-header")
  for (let i = 0; i < 50; i++) {
    const explosion = document.createElement("div")
    explosion.textContent = "💥"
    explosion.style.position = "absolute"
    explosion.style.left = Math.random() * window.innerWidth + "px"
    explosion.style.top = Math.random() * 200 + "px"
    explosion.style.fontSize = Math.random() * 30 + 20 + "px"
    explosion.style.zIndex = "9999"
    explosion.style.animation = "explode 2s ease-out forwards"
    document.body.appendChild(explosion)
    setTimeout(() => explosion.remove(), 2000)
  }
  showRandomPopup()
  setTimeout(spawnRandomButtons, 500)
}

// Create floating buttons
function createFloatingButtons() {
  const floatingZone = document.getElementById("floating-zone")
  for (let i = 0; i < 20; i++) {
    const btn = document.createElement("button")
    btn.textContent = `🎈 FLAG{float_${i}}`
    btn.className = "floating-btn"
    btn.style.position = "fixed"
    btn.style.left = Math.random() * (window.innerWidth - 200) + "px"
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px"
    btn.style.zIndex = "1000"
    btn.onclick = () => {
      popupChain()
      btn.remove()
      createFloatingButtons()
    }
    floatingZone.appendChild(btn)
  }
}

// Screen shake effect
function screenShake() {
  document.body.style.animation = "shake 2s infinite"
  setTimeout(() => {
    document.body.style.animation = ""
    colorBomb()
  }, 2000)
}

// Color bomb effect
function colorBomb() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
  const elements = document.querySelectorAll("*")
  elements.forEach((el) => {
    if (Math.random() > 0.7) {
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      el.style.color = colors[Math.floor(Math.random() * colors.length)]
    }
  })
  setTimeout(() => location.reload(), 3000)
}

// Text rain effect
function textRain() {
  const texts = ["FLAG{rain_fake}", "💧", "🌧️", "FAKE", "TRAP", "🎯"]
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div")
    drop.textContent = texts[Math.floor(Math.random() * texts.length)]
    drop.style.position = "fixed"
    drop.style.left = Math.random() * window.innerWidth + "px"
    drop.style.top = "-50px"
    drop.style.zIndex = "9999"
    drop.style.animation = "fall 3s linear forwards"
    document.body.appendChild(drop)
    setTimeout(() => drop.remove(), 3000)
  }
}

// Matrix rain effect
function matrixRain() {
  const matrix = document.getElementById("matrix-container")
  matrix.innerHTML = ""
  for (let i = 0; i < 50; i++) {
    const column = document.createElement("div")
    column.className = "matrix-column"
    column.style.left = i * 20 + "px"
    for (let j = 0; j < 20; j++) {
      const char = document.createElement("span")
      char.textContent = Math.random() > 0.5 ? "1" : "0"
      char.style.animationDelay = Math.random() * 2 + "s"
      column.appendChild(char)
    }
    matrix.appendChild(column)
  }
}

// Fake loading with multiple popups
function fakeLoading() {
  let progress = 0
  const loadingPopup = document.createElement("div")
  loadingPopup.className = "loading-popup"
  loadingPopup.innerHTML = `
        <div class="loading-content">
            <h2>🔄 CHARGEMENT DU FLAG...</h2>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" id="progress-fill"></div>
            </div>
            <p id="loading-text">0%</p>
        </div>
    `
  document.body.appendChild(loadingPopup)

  const interval = setInterval(() => {
    progress += Math.random() * 10
    if (progress > 100) progress = 100
    document.getElementById("progress-fill").style.width = progress + "%"
    document.getElementById("loading-text").textContent = Math.floor(progress) + "%"

    if (progress >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        loadingPopup.remove()
        showFakeFlag()
        popupChain()
      }, 1000)
    }
  }, 200)
}

// Glitch mode
function glitchMode() {
  document.body.classList.add("glitch-mode")
  const glitchTexts = document.querySelectorAll("*")
  glitchTexts.forEach((el) => {
    if (el.textContent && Math.random() > 0.8) {
      const original = el.textContent
      const glitched = original
        .split("")
        .map((char) => (Math.random() > 0.7 ? String.fromCharCode(Math.random() * 94 + 33) : char))
        .join("")
      el.textContent = glitched
      setTimeout(() => (el.textContent = original), 2000)
    }
  })
}

// Popup chain reaction
function popupChain() {
  const messages = [
    "FLAG{popup_1}",
    "FLAG{popup_2}",
    "FLAG{popup_3}",
    "CONTINUEZ!",
    "PRESQUE!",
    "ENCORE!",
    "FLAG{chain_fake}",
  ]

  let count = 0
  const showNext = () => {
    if (count < 7) {
      setTimeout(() => {
        alert(messages[count])
        count++
        showNext()
      }, 500)
    } else {
      buttonVirus()
    }
  }
  showNext()
}

// Button virus - buttons multiply everywhere
function buttonVirus() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const btn = document.createElement("button")
      btn.textContent = `🦠 VIRUS ${i} - FLAG{virus_${i}}`
      btn.className = "virus-btn"
      btn.style.position = "fixed"
      btn.style.left = Math.random() * (window.innerWidth - 200) + "px"
      btn.style.top = Math.random() * (window.innerHeight - 50) + "px"
      btn.style.zIndex = "9999"
      btn.onclick = () => {
        btn.remove()
        if (Math.random() > 0.5) buttonVirus()
        showRandomPopup()
      }
      document.body.appendChild(btn)
    }, i * 100)
  }
}

// Fake hack simulation
function fakeHack() {
  const hackPopup = document.createElement("div")
  hackPopup.className = "hack-popup"
  hackPopup.innerHTML = `
        <div class="hack-content">
            <h2>🔓 SYSTÈME HACKÉ!</h2>
            <div class="hack-terminal">
                <div>Accès root obtenu...</div>
                <div>Extraction des flags...</div>
                <div>FLAG{hack_fake_1}</div>
                <div>FLAG{hack_fake_2}</div>
                <div>Erreur: Accès refusé</div>
                <div>Tentative de bypass...</div>
                <div>FLAG{hack_fake_3}</div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()">FERMER</button>
        </div>
    `
  document.body.appendChild(hackPopup)
}

// Confetti explosion
function confettiExplosion() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]
  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement("div")
    confetti.textContent = "🎊"
    confetti.style.position = "fixed"
    confetti.style.left = Math.random() * window.innerWidth + "px"
    confetti.style.top = Math.random() * window.innerHeight + "px"
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.fontSize = Math.random() * 20 + 10 + "px"
    confetti.style.zIndex = "9999"
    confetti.style.animation = "confetti 3s ease-out forwards"
    document.body.appendChild(confetti)
    setTimeout(() => confetti.remove(), 3000)
  }
  setTimeout(popupChain, 1000)
}

// Mirror mode - duplicate everything
function mirrorMode() {
  const container = document.querySelector(".chaos-container")
  const clone = container.cloneNode(true)
  clone.style.transform = "scaleX(-1)"
  clone.style.opacity = "0.7"
  document.body.appendChild(clone)
  setTimeout(() => clone.remove(), 5000)
}

// Invisible buttons
function invisibleButtons() {
  for (let i = 0; i < 15; i++) {
    const btn = document.createElement("button")
    btn.textContent = `FLAG{invisible_${i}}`
    btn.style.position = "fixed"
    btn.style.left = Math.random() * (window.innerWidth - 200) + "px"
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px"
    btn.style.opacity = "0.1"
    btn.style.zIndex = "9999"
    btn.onmouseover = () => (btn.style.opacity = "1")
    btn.onmouseout = () => (btn.style.opacity = "0.1")
    btn.onclick = () => {
      showFakeFlag()
      btn.remove()
    }
    document.body.appendChild(btn)
  }
}

// Button maze
function buttonMaze() {
  const maze = document.createElement("div")
  maze.className = "button-maze"
  maze.style.position = "fixed"
  maze.style.top = "0"
  maze.style.left = "0"
  maze.style.width = "100%"
  maze.style.height = "100%"
  maze.style.backgroundColor = "rgba(0,0,0,0.9)"
  maze.style.zIndex = "10000"

  for (let i = 0; i < 100; i++) {
    const btn = document.createElement("button")
    btn.textContent = i === 50 ? "🚪 SORTIE" : `FLAG{maze_${i}}`
    btn.style.position = "absolute"
    btn.style.left = Math.random() * 90 + "%"
    btn.style.top = Math.random() * 90 + "%"
    btn.onclick = () => {
      if (i === 50) {
        maze.remove()
        showFakeFlag()
      } else {
        showRandomPopup()
      }
    }
    maze.appendChild(btn)
  }
  document.body.appendChild(maze)
}

// Fake error messages
function fakeError() {
  const errors = [
    "ERREUR 404: Flag not found",
    "ERREUR 500: Server flag error",
    "ERREUR 403: Flag access denied",
    "ERREUR 418: I am a teapot (no flags here)",
    "ERREUR 999: Flag overflow",
  ]
  alert(errors[Math.floor(Math.random() * errors.length)])
  setTimeout(buttonVirus, 1000)
}

// Random teleport buttons
function randomTeleport() {
  const buttons = document.querySelectorAll("button")
  buttons.forEach((btn) => {
    btn.style.position = "fixed"
    btn.style.left = Math.random() * (window.innerWidth - 200) + "px"
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px"
    btn.style.zIndex = "1000"
  })
}

// Button swarm
function buttonSwarm() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const btn = document.createElement("button")
      btn.textContent = `🐝 SWARM ${i}`
      btn.className = "swarm-btn"
      btn.style.position = "fixed"
      btn.style.left = Math.random() * window.innerWidth + "px"
      btn.style.top = Math.random() * window.innerHeight + "px"
      btn.style.animation = "swarm 5s infinite"
      btn.onclick = () => {
        btn.remove()
        if (Math.random() > 0.7) buttonSwarm()
      }
      document.body.appendChild(btn)
      setTimeout(() => btn.remove(), 5000)
    }, i * 50)
  }
}

// Fake progress bars everywhere
function fakeProgress() {
  for (let i = 0; i < 10; i++) {
    const progress = document.createElement("div")
    progress.className = "fake-progress-bar"
    progress.innerHTML = `
            <div>Chargement FLAG ${i + 1}...</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.random() * 100}%"></div>
            </div>
        `
    progress.style.position = "fixed"
    progress.style.left = Math.random() * (window.innerWidth - 300) + "px"
    progress.style.top = Math.random() * (window.innerHeight - 100) + "px"
    progress.style.zIndex = "9999"
    document.body.appendChild(progress)
    setTimeout(() => progress.remove(), 3000)
  }
}

// Ultimate chaos mode
function chaosMode() {
  headerExplosion()
  setTimeout(createFloatingButtons, 500)
  setTimeout(screenShake, 1000)
  setTimeout(matrixRain, 1500)
  setTimeout(buttonVirus, 2000)
  setTimeout(confettiExplosion, 2500)
  setTimeout(popupChain, 3000)
  setTimeout(buttonSwarm, 3500)
  setTimeout(fakeProgress, 4000)
}

// Fake clue actions
function fakeClueAction(zone) {
  const actions = [
    () => spawnRandomButtons(),
    () => popupChain(),
    () => buttonVirus(),
    () => showFakeFlag(),
    () => matrixRain(),
    () => confettiExplosion(),
  ]
  actions[Math.floor(Math.random() * actions.length)]()
}

// Social trap
function socialTrap() {
  const traps = [
    "FLAG{social_fake}",
    "Partagez pour débloquer le flag!",
    "Likez cette page!",
    "FLAG{social_trap}",
    "Suivez-nous pour plus de flags!",
  ]
  alert(traps[Math.floor(Math.random() * traps.length)])
  buttonVirus()
}
