(() => {
  const onboardingSection = document.querySelector('.onboarding');
  const goBtn = document.querySelector('.onboarding__btn');
  const gameArea = document.querySelector('.game-area');
  const gameCube = document.querySelector('.game-area__cube')

  function moveCube() {
    const spin = [
      { transform: "translate(0px)" },
      { transform: "translate(-80vw, -20%)" },
      { transform: "translate(0px)" },
    ];
    
    const timing = {
      duration: 3000,
      iterations: 5,
    };

    gameCube.animate(spin, timing)
  }

  function handlerGoBtnClick(e) {
    onboardingSection.style.display = 'none';
    gameArea.style.display = 'block';
    moveCube()
  }



  goBtn.addEventListener('click', handlerGoBtnClick);
})()