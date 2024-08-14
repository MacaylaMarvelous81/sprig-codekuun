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
  }
};

const tunes = {
  select: tune`
272.72727272727275: E5/272.72727272727275,
8454.545454545456`,
  confirm: tune`
500: A5-500,
15500`
};

const inputs = {
  menuLeft: 'a',
  menuRight: 'd',
  menuConfirm: 'k'
};

class GameObject {
  static sprites = {};
  static solid = false;

  static #solidSprites = [ bitmaps.barrier.key ];

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
  }

  static register(obj) {
    if (obj.solid) {
      for (const spr in obj.sprites) {
        GameObject.#solidSprites.push(obj.sprites[spr]);
      }
      setSolids(this.#solidSprites);
    };
  }

  remove() {
    // Maybe keep track if removed, and prevent operations on object if so?
    this.#sprigSprite.remove();
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

  direction = 'down';
  
  constructor(x, y, dir) {
    let sprite = Controllable.sprites[dir] || Controllable.sprites.down;
    
    super(x, y, sprite);

    this.direction = dir;
  }

  move(direction) {
    if (direction === 'up') {
      this.sprite = Controllable.sprites.up;
      this.y -= 1;
    } else if (direction === 'down') {
      this.sprite = Controllable.sprites.down;
      this.y += 1;
    } else if (direction === 'left') {
      this.sprite = Controllable.sprites.left;
      this.x -= 1;
    } else if (direction === 'right') {
      this.sprite = Controllable.sprites.right;
      this.x += 1;
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
    runSelected: bitmaps.commandRunSelected.key
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
    }
  };

  #type = '';
  #selected = false;

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

  #updateSprite() {
    this.sprite = this.#selected ? this.#type.selected : this.#type.default;
  }
}

const levels = [
  {
    onLoad() {
      new Controllable(5, 4, 'right');

      addText('Choose commands\nfrom the palette!', {
        x: 1,
        y: 9,
        color: color`5`
      });
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
  }
];

let level = 0;

const hud = {
  inputHintSelect: null,
  inputHintConfirm: null,
  commands: [],
  commandSlots: [],
  selected: 0,
  currentSlot: 0,
  canSelect: false,
  
  reset() {
    if (this.inputHintSelect) this.inputHintSelect.remove();
    if (this.inputHintConfirm) this.inputHintConfirm.remove();
    this.commands.forEach((obj) => obj.remove());
    this.commandSlots.forEach((obj) => obj.remove());

    // Controller hints
    this.inputHintSelect = new GameObject(0, 10, bitmaps.inputLeftHorizontal.key);
    this.inputHintConfirm = new GameObject(7, 10, bitmaps.inputRightDown.key);

    addText('Select', {
      x: 2,
      y: 15
    });
    addText('Confirm', {
      x: 12,
      y: 15
    });

    // Commands
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
    } else {
      if (this.currentSlot === this.commandSlots.length) return;
      
      this.commandSlots[this.currentSlot++].type = this.commands[this.selected].type;
    }
  }
};

const legend = [];
for (const item in bitmaps) legend.push([ bitmaps[item].key, bitmaps[item].sprite ]);
setLegend(...legend);

function reloadLevel(level) {
  setMap(level.map);
  level.onLoad();
  hud.reset();
}

reloadLevel(levels[level]);

onInput(inputs.menuLeft, () => hud.moveSelection('left'));
onInput(inputs.menuRight, () => hud.moveSelection('right'));
onInput(inputs.menuConfirm, () => hud.selectCommand());