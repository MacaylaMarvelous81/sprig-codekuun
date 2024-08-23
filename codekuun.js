const bitmaps = {
  dummy: {
    key: ',',
    sprite: bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`
  },
  controllableUp: {
    key: '`',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777557777772
2777775555777772
2777755555577772
2777555555557772
2777577557757772
2777777557777772
2777777557777772
2777777557777772
2777777557777772
2777777557777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  controllableDown: {
    key: '1',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777557777772
2777777557777772
2777777557777772
2777777557777772
2777777557777772
2777577557757772
2777555555557772
2777755555577772
2777775555777772
2777777557777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  controllableLeft: {
    key: '2',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777777777772
2777775577777772
2777755777777772
2777555777777772
2775555555555772
2775555555555772
2777555777777772
2777755777777772
2777775577777772
2777777777777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  controllableRight: {
    key: '3',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777777777772
2777777755777772
2777777775577772
2777777775557772
2775555555555772
2775555555555772
2777777775557772
2777777775577772
2777777755777772
2777777777777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  inputLeftHorizontal: {
    key: '4',
    sprite: bitmap`
................
.......00.......
......0..0......
......0..0......
.......00.......
................
..00..0.....00..
.0LL0.0....0LL0.
.0LL0.0....0LL0.
..00..0000..00..
................
.......00.......
......0..0......
......0..0......
.......00.......
................`
  },
  inputLeftVertical: {
    key: 't',
    sprite: bitmap`
................
.......00.......
......0LL0......
......0LL0......
.......00.......
................
..00..0.....00..
.0220.0....0220.
.0220.0....0220.
..00..0000..00..
................
.......00.......
......0LL0......
......0LL0......
.......00.......
................`
  },
  inputRightDown: {
    key: '5',
    sprite: bitmap`
................
.......00.......
......0..0......
......0..0......
.......00.......
................
..00..0000..00..
.0..0.0..0.0..0.
.0..0.000..0..0.
..00..0..0..00..
................
.......00.......
......0LL0......
......0LL0......
.......00.......
................`
  },
  commandMove: {
    key: '6',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777777777772
2777777755777772
2777777775577772
2777777775557772
2775555555555772
2775555555555772
2777777775557772
2777777775577772
2777777755777772
2777777777777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  commandMoveSelected: {
    key: '9',
    sprite: bitmap`
.66666666666666.
6677777777777766
6777777777777776
6777777777777776
6777777755777776
6777777775577776
6777777775557776
6775555555555776
6775555555555776
6777777775557776
6777777775577776
6777777755777776
6777777777777776
6777777777777776
6677777777777766
.66666666666666.`
  },
  commandEmpty: {
    key: '7',
    sprite: bitmap`
.22222222222222.
2200000000000022
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.`
  },
  commandErase: {
    key: '0',
    sprite: bitmap`
.22222222222222.
2200000000000022
2000000000000002
20000LLLLLL00002
2000LLLLLLLL0002
2000011111100002
2000010110100002
2000011001100002
2000011001100002
2000010110100002
2000011111100002
2000011111100002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.`
  },
  commandEraseSelected: {
    key: '-',
    sprite: bitmap`
.66666666666666.
6600000000000066
6000000000000006
60000LLLLLL00006
6000LLLLLLLL0006
6000011111100006
6000010110100006
6000011001100006
6000011001100006
6000010110100006
6000011111100006
6000011111100006
6000000000000006
6000000000000006
6600000000000066
.66666666666666.`
  },
  commandRun: {
    key: '=',
    sprite: bitmap`
.22222222222222.
2244444444444422
2444444444444442
2444444444444442
2444442444444442
2444442244444442
2444442224444442
2444442222444442
2444442222444442
2444442224444442
2444442244444442
2444442444444442
2444444444444442
2444444444444442
2244444444444422
.22222222222222.`
  },
  commandRunSelected: {
    key: 'q',
    sprite: bitmap`
.66666666666666.
6644444444444466
6444444444444446
6444444444444446
6444442444444446
6444442244444446
6444442224444446
6444442222444446
6444442222444446
6444442224444446
6444442244444446
6444442444444446
6444444444444446
6444444444444446
6644444444444466
.66666666666666.`
  },
  commandTurnRight: {
    key: 'e',
    sprite: bitmap`
.22222222222222.
2244444444444422
2444444442444442
2444444444244442
2444422222224442
2444244444244442
2442444442444442
2442444444444442
2442444444444442
2442444444444442
2442444444444442
2442444444444442
2444444444444442
2444444444444442
2244444444444422
.22222222222222.`
  },
  commandTurnRightSelected: {
    key: 'r',
    sprite: bitmap`
.66666666666666.
6644444444444466
6444444442444446
6444444444244446
6444422222224446
6444244444244446
6442444442444446
6442444444444446
6442444444444446
6442444444444446
6442444444444446
6442444444444446
6444444444444446
6444444444444446
6644444444444466
.66666666666666.`
  },
  commandLoop: {
    key: 'y',
    sprite: bitmap`
.22222222222222.
22FFFFFFFFFFFF22
2FF0000000000FF2
2F0FFFFFFFFF0FF2
2F0FFFFFFF000002
2F0FFFFFFFF000F2
2F0FFFFFFFFF0FF2
2F0FFFFFFFFFFFF2
2F0FFFFFFFFFFFF2
2F0FFFFFFFFFFFF2
2F0FFFFFFFFFFFF2
2F0FFFFFFFFFFFF2
2F0FFFFFFFFFFFF2
2FF0000000000FF2
22FFFFFFFFFFFF22
.22222222222222.`
  },
  commandLoopSelected: {
    key: 'u',
    sprite: bitmap`
.66666666666666.
66FFFFFFFFFFFF66
6FF0000000000FF6
6F0FFFFFFFFF0FF6
6F0FFFFFFF000006
6F0FFFFFFFF000F6
6F0FFFFFFFFF0FF6
6F0FFFFFFFFFFFF6
6F0FFFFFFFFFFFF6
6F0FFFFFFFFFFFF6
6F0FFFFFFFFFFFF6
6F0FFFFFFFFFFFF6
6F0FFFFFFFFFFFF6
6FF0000000000FF6
66FFFFFFFFFFFF66
.66666666666666.`
  },
  commandLoopEnd: {
    key: 'i',
    sprite: bitmap`
.22222222222222.
22FFFFFFFFFFFF22
2FFFFF00FFFFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFFFF00FFFFF2
2FFFFFFF00FFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFFF00FFFFFF2
2FFFFF00FFFFFFF2
22FFFFFFFFFFFF22
.22222222222222.`
  },
  commandLoopEndSelected: {
    key: 'o',
    sprite: bitmap`
.66666666666666.
66FFFFFFFFFFFF66
6FFFFF00FFFFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFFFF00FFFFF6
6FFFFFFF00FFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFFF00FFFFFF6
6FFFFF00FFFFFFF6
66FFFFFFFFFFFF66
.66666666666666.`
  },
  barrier: {
    key: '8',
    sprite: bitmap`
....33333333....
...3........3...
..3..........3..
.3.3..........3.
3...3..........3
3....3.........3
3.....3........3
3......3.......3
3.......3......3
3........3.....3
3.........3....3
3..........3...3
.3..........3.3.
..3..........3..
...3........3...
....33333333....`
  },
  scrapCode: {
    key: 'w',
    sprite: bitmap`
................
.00000000000000.
.00000000000000.
.00000000000000.
.0D000000000000.
.00D00000000000.
.000D0000000000.
.0000D000000000.
.000D0000000000.
.00D00000000000.
.0D0000D0D0D0D0.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
................`
  }
};

/*
commandTurnRight
bitmap`
.22222222222222.
2244444444444422
2444444444444442
2444422222244442
2444244444424442
2442444444442442
2442444444242422
2442444444422242
2442444444442442
2442444444444442
2442444444442442
2444244444424442
2444422222244442
2444444444444442
2244444444444422
.22222222222222.`
*/

const tunes = {
  select: tune`
272.72727272727275: E5/272.72727272727275,
8454.545454545456`,
  confirm: tune`
500: A5-500,
15500`,
  collect: tune`
82.1917808219178: F5/82.1917808219178,
82.1917808219178: F5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
2219.1780821917805`
};

const inputs = {
  menuLeft: 'a',
  menuRight: 'd',
  menuConfirm: 'k',
  valueUp: 'w',
  valueDown: 's'
};

const textManager = {
  texts: [],
  
  addText(info) {
    const id = this.texts.push(info);
    this.updateText();
    return id;
  },

  removeText(index) {
    this.texts[index] = null;

    this.updateText();
  },

  updateText() {
    clearText();

    this.texts.forEach((text) => {
      if (text !== null) {
        addText(text.text, {
          x: text.x,
          y: text.y,
          color: text.color
        });
      }
    });
  }
}

class GameObject {
  static sprites = {};
  static solid = false;

  static #solidSprites = [ bitmaps.barrier.key ];
  static #objects = [];

  get x() { return this.#sprigSprite.x; }
  set x(val) { this.#sprigSprite.x = val; }
  get y() { return this.#sprigSprite.y; }
  set y(val) { this.#sprigSprite.y = val; }
  get sprite() { return this.#sprigSprite.type; }
  set sprite(val) {
    const x = this.x;
    const y = this.y;

    this.#sprigSprite.remove();
    
    addSprite(0, 0, val);
    this.#sprigSprite = getTile(0, 0)[0];
    this.x = x;
    this.y = y;
  }

  #sprigSprite;

  constructor(x, y, initialSprite) {
    // 0, 0 is the 'magic' tile where objects are initialized. Don't put anything
    // here!
    addSprite(0, 0, initialSprite);
    this.#sprigSprite = getTile(0, 0)[0];
    this.x = x;
    this.y = y;

    GameObject.#objects.push(this);
  }

  static register(obj) {
    if (obj.solid) {
      for (const spr in obj.sprites) {
        GameObject.#solidSprites.push(obj.sprites[spr]);
      }
      setSolids(this.#solidSprites);
    };
  }

  static getObjectsOfType(type) {
    return GameObject.#objects.filter((obj) => obj instanceof type);
  }

  static step() {
    GameObject.#objects.forEach((obj) => obj.onStep());
  }

  onStep() {
    GameObject.#objects.forEach((obj) => {
      if (obj !== this && obj.x === this.x && obj.y === this.y) {
        this.onOverlap(obj);
      }
    });
  }

  onOverlap(other) {}

  remove() {
    // Maybe keep track if removed, and prevent operations on object if so?
    this.#sprigSprite.remove();

    GameObject.#objects.splice(GameObject.#objects.indexOf(this), 1);
  }
}

class Controllable extends GameObject {
  static sprites = {
    up: bitmaps.controllableUp.key,
    down: bitmaps.controllableDown.key,
    left: bitmaps.controllableLeft.key,
    right: bitmaps.controllableRight.key
  };
  static solid = true;
  static {
    GameObject.register(Controllable);
  }

  #direction;
  get direction() { return this.#direction; }
  set direction(val) {
    this.#direction = val;
    this.sprite = Controllable.sprites[val];
  }
  
  constructor(x, y, dir) {
    let sprite = Controllable.sprites[dir];
    
    super(x, y, sprite);

    this.#direction = dir;
  }

  move(direction) {
    if (direction === 'up') {
      this.y -= 1;
    } else if (direction === 'down') {
      this.y += 1;
    } else if (direction === 'left') {
      this.x -= 1;
    } else if (direction === 'right') {
      this.x += 1;
    }
  }

  turn(direction) {
    // right turns in the clockwise direction, left turns counterclockwise
    switch (this.direction) {
      case 'up':
        if (direction === 'right') this.direction = 'right';
        if (direction === 'left') this.direction = 'left';
        break;
      case 'down':
        if (direction === 'right') this.direction = 'left';
        if (direction === 'left') this.direction = 'right';
        break;
      case 'left':
        if (direction === 'right') this.direction = 'up';
        if (direction === 'left') this.direction = 'down';
        break;
      case 'right':
        if (direction === 'right') this.direction = 'down';
        if (direction === 'left') this.direction = 'up';
        break;
    }
  }
}

class Command extends GameObject {
  static sprites = {
    empty: bitmaps.commandEmpty.key,
    move: bitmaps.commandMove.key,
    moveSelected: bitmaps.commandMoveSelected.key,
    erase: bitmaps.commandErase.key,
    eraseSelected: bitmaps.commandEraseSelected.key,
    run: bitmaps.commandRun.key,
    runSelected: bitmaps.commandRunSelected.key,
    turnRight: bitmaps.commandTurnRight.key,
    turnRightSelected: bitmaps.commandTurnRightSelected.key,
    loop: bitmaps.commandLoop.key,
    loopSelected: bitmaps.commandLoopSelected.key,
    loopEnd: bitmaps.commandLoopEnd.key,
    loopEndSelected: bitmaps.commandLoopEndSelected.key
  };
  static solid = false;
  static {
    GameObject.register(Command);
  }

  static commandTypes = {
    empty: {
      default: Command.sprites.empty,
      selected: null
    },
    move: {
      default: Command.sprites.move,
      selected: Command.sprites.moveSelected
    },
    erase: {
      default: Command.sprites.erase,
      selected: Command.sprites.eraseSelected
    },
    run: {
      default: Command.sprites.run,
      selected: Command.sprites.runSelected
    },
    turnRight: {
      default: Command.sprites.turnRight,
      selected: Command.sprites.turnRightSelected
    },
    loop: {
      default: Command.sprites.loop,
      selected: Command.sprites.loopSelected
    },
    loopEnd: {
      default: Command.sprites.loopEnd,
      selected: Command.sprites.loopEndSelected
    }
  };

  #type = '';
  #selected = false;
  #value = 0;

  get type() { return this.#type; }
  set type(val) {
    this.#type = val;
    this.#updateSprite();
  }
  get selected() { return this.#selected; }
  set selected(val) {
    this.#selected = val;
    this.#updateSprite();
  }

  constructor(x, y, type, selected) {
    super(x, y, selected ? type.selected : type.default);

    this.#type = type;
    this.#selected = selected;
  }

  execute() {
    // Maybe define behavior in command type object?
    switch (this.#type) {
      case Command.commandTypes.move:
        GameObject.getObjectsOfType(Controllable).forEach((controllable) => controllable.move(controllable.direction));
        break;
      case Command.commandTypes.turnRight:
        GameObject.getObjectsOfType(Controllable).forEach((controllable) => controllable.turn('right'));
        break;
      default:
        break;
    }
  }

  #updateSprite() {
    this.sprite = this.#selected ? this.#type.selected : this.#type.default;
  }
}

class Scrap extends GameObject {
  static sprites = {
    code: bitmaps.scrapCode.key
  };
  static solid = false;
  static {
    GameObject.register(Scrap);
  }

  constructor(x, y) {
    /*
    const sprite = Math.floor(Math.random() * 2);
    super(x, y, sprite === 1 ? Scrap.sprites.code
    */

    super(x, y, Scrap.sprites.code);
  }

  onOverlap(other) {
    playTune(tunes.collect);
    
    if (other instanceof Controllable) this.remove();
  }
}

const levels = [
  {
    onLoad(ephemeralObjects, ephemeralText) {
      ephemeralObjects.push(new Controllable(5, 4, 'right'));
      ephemeralObjects.push(new Scrap(8, 4));

      ephemeralText.push(textManager.addText({
        text: 'Choose commands\nfrom the palette!',
        x: 1,
        y: 9,
        color: color`5`
      }));
    },
    commands: [ Command.commandTypes.move ],
    commandSlots: 3,
    map: map`
..............
88888888888888
..............
....888888....
....8....8....
....888888....
..............
..............
88888888888888
..............
..............`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      ephemeralObjects.push(new Controllable(4, 5, 'up'));
      ephemeralObjects.push(new Scrap(9, 5));
    },
    commands: [ Command.commandTypes.move, Command.commandTypes.turnRight ],
    commandSlots: 9,
    map: map`
..............
88888888888888
..............
...88888888...
...8,,,...8...
...8.8888.8...
...888..888...
..............
88888888888888
..............
..............`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      ephemeralObjects.push(new Controllable(2, 4, 'right'));
      ephemeralObjects.push(new Scrap(11, 4));

      ephemeralObjects.push(new GameObject(1, 7, bitmaps.inputLeftVertical.key));
      ephemeralText.push(textManager.addText({
        text: 'set loop amount',
        x: 3,
        y: 10,
        color: color`5`
      }));
    },
    commands: [ Command.commandTypes.move, Command.commandTypes.loop, Command.commandTypes.loopEnd ],
    commandSlots: 12,
    map: map`
..............
88888888888888
..............
.888888888888.
.8..........8.
.888888888888.
..............
..............
88888888888888
..............
..............`
  }
];

let level = 0;

const game = {
  inputHintSelect: null,
  inputHintConfirm: null,
  selectText: null,
  confirmText: null,
  commands: [],
  commandSlots: [],
  selected: 0,
  currentSlot: 0,
  canSelect: false,
  ephemeralObjects: [],
  ephemeralText: [],
  
  reset() {
    if (this.inputHintSelect) this.inputHintSelect.remove();
    if (this.inputHintConfirm) this.inputHintConfirm.remove();
    if (this.selectText !== null) textManager.removeText(this.selectText);
    if (this.confirmText !== null) textManager.removeText(this.confirmText);
    this.commands.forEach((obj) => obj.remove());
    this.commandSlots.forEach((obj) => obj.remove());

    // Controller hints
    this.inputHintSelect = new GameObject(0, 10, bitmaps.inputLeftHorizontal.key);
    this.inputHintConfirm = new GameObject(7, 10, bitmaps.inputRightDown.key);

    this.selectText = textManager.addText({
      text: 'Select',
      x: 2,
      y: 15
    });
    this.confirmText = textManager.addText({
      text: 'Confirm',
      x: 12,
      y: 15
    });

    // Commands
    this.currentSlot = 0;
    this.commandSlots = [];
    for (let i = 0; i < levels[level].commandSlots; i++) {
      this.commandSlots.push(new Command(i + 1, 0, Command.commandTypes.empty, false));
    }

    this.selected = 0;
    this.commands = levels[level].commands.map((type, index) => new Command(index + 1, 9, type, index === 0));
    this.commands.push(new Command(this.commands.length + 1, 9, Command.commandTypes.erase, false));
    this.commands.push(new Command(this.commands.length + 1, 9, Command.commandTypes.run, false));
    
    this.canSelect = true;
  },

  moveSelection(dir) {
    if (!this.canSelect) return;

    playTune(tunes.select);
    
    this.commands[this.selected].selected = false;

    if (dir === 'left') this.selected--;
    if (dir === 'right') this.selected++;

    if (this.selected < 0) {
      this.selected = this.commands.length - 1;
    } else if (this.selected > this.commands.length - 1) {
      this.selected = 0;
    }

    this.commands[this.selected].selected = true;
  },

  selectCommand() {
    if (!this.canSelect) return;
    
    playTune(tunes.confirm);
    
    if (this.commands[this.selected].type === Command.commandTypes.erase) {
      if (this.currentSlot === 0) return;
      
      this.commandSlots[--this.currentSlot].type = Command.commandTypes.empty;
    } else if (this.commands[this.selected].type === Command.commandTypes.run) {
      this.canSelect = false;
      this.commands[this.selected].selected = false;

      const step = (state) => () => {
        this.commandSlots[state.instr].execute();

        GameObject.step();
        
        if (state.instr !== this.commandSlots.length - 1) {
          // No loop ends or anything. Proceed to next instruction.
          setTimeout(step({ instr: state.instr + 1 }), 500);
        } else {
          const scrapCount = GameObject.getObjectsOfType(Scrap).length;

          // Reload the level or load the next level depending if all scraps were successfully
          // collected or not
          if (scrapCount === 0) {
            this.reloadLevel(levels[++level]);
          } else {
            this.reloadLevel(levels[level]);
          }
        }
      };

      step({ instr: 0 })();
    } else {
      if (this.currentSlot === this.commandSlots.length) return;
      
      this.commandSlots[this.currentSlot++].type = this.commands[this.selected].type;
    }
  },

  incrementSelectedValue() {
    if (!this.canSelect) return;

    if (this.commands[this.selected].incrementValue()) playTune(tunes.select);
  },

  decrementSelectedValue() {
    if (!this.canSelect) return;

    if (this.commands[this.selected].decrementValue()) playTune(tunes.select);
  },

  reloadLevel(level) {
    this.ephemeralObjects.forEach((obj) => obj.remove());
    this.ephemeralText.forEach((id) => textManager.removeText(id));
    this.ephemeralText.splice(0, this.ephemeralText.length);
    setMap(level.map);
    level.onLoad(this.ephemeralObjects, this.ephemeralText);
    this.reset();
  }
};

const legend = [];
for (const item in bitmaps) legend.push([ bitmaps[item].key, bitmaps[item].sprite ]);
setLegend(...legend);

game.reloadLevel(levels[level]);

onInput(inputs.menuLeft, () => game.moveSelection('left'));
onInput(inputs.menuRight, () => game.moveSelection('right'));
onInput(inputs.valueUp, () => game.incrementSelectedValue());
onInput(inputs.valueDown, () => game.decrementSelectedValue());
onInput(inputs.menuConfirm, () => game.selectCommand());