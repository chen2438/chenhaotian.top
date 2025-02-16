---
description: 发布于 2025-01-17
categories:
- ai
date: 2025-01-17
slug: metagpt
title: MetaGPT 项目使用记录
updated: 2025-02-12
tags: 
- ai
- metagpt
copyright: false
---

# MetaGPT 项目使用记录

> 官方中文文档：https://docs.deepwisdom.ai/main/zh/
>
> PS：官方中文文档感觉不如英文文档再自行翻译；这篇文档比微软的AutoGen难理解
>
> LLM 以 gpt-4o 为例

## 在 Codespaces 中安装

> 如果在本地安装（使用`pip install metagpt` ）,可能会出现 `TypeError: AsyncClient.__init__() got an unexpected keyword argument 'proxies'`，此时使用 `pip uninstall metagpt` 卸载后，使用`pip install git+https://github.com/geekan/MetaGPT` 安装最新版本即可解决
>
> 如果仍然出现错误，有可能是MetaGPT的依赖更新了，例如安装`volcengine-python-sdk-1.0.121`而不是`volcengine-python-sdk-1.0.123`

将 https://github.com/geekan/MetaGPT fork 一份，然后创建Codespace

![image-20241230200953086](https://media.opennet.top/i/2024/12/30/vm2w6i-0.png)

首次运行示例

```bash
metagpt "write a cli blackjack game"
```

会提示

```
Value error, Please set your API key in /app/metagpt/config/config2.yaml
```

打开此文件，设置 api_key，修改模型为 gpt-4o

## 快速开始：一句话需求的软件开发

配置完毕后，再次运行

```bash
metagpt "write a cli blackjack game"
```

````bash
root@codespaces-f27eab:/workspaces/MetaGPT# metagpt "write a cli blackjack game"
2024-12-30 12:01:47.490 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /app/metagpt
2024-12-30 12:01:51.357 | INFO     | metagpt.team:invest:93 - Investment: $3.0.
2024-12-30 12:01:51.358 | INFO     | metagpt.roles.role:_act:403 - Alice(Product Manager): to do PrepareDocuments(PrepareDocuments)
2024-12-30 12:01:51.431 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/20241230120151/docs/requirement.txt
2024-12-30 12:01:51.431 | INFO     | metagpt.roles.role:_act:403 - Alice(Product Manager): to do WritePRD(WritePRD)
2024-12-30 12:01:51.432 | INFO     | metagpt.actions.write_prd:run:86 - New requirement detected: write a cli blackjack game
[CONTENT]
{
    "Language": "en_us",
    "Programming Language": "Python",
    "Original Requirements": "write a cli blackjack game",
    "Project Name": "cli_blackjack_game",
    "Product Goals": [
        "Create an engaging and interactive CLI experience",
        "Ensure the game logic is accurate and fair",
        "Provide clear instructions and feedback to the player"
    ],
    "User Stories": [
        "As a player, I want to start a new game easily from the command line",
        "As a player, I want to see my current hand and score after each move",
        "As a player, I want to receive feedback on winning or losing a round",
        "As a player, I want to be able to play multiple rounds without restarting the program",
        "As a player, I want to have the option to quit the game at any time"
    ],
    "Competitive Analysis": [
        "CLI Blackjack A: Simple interface, lacks detailed instructions",
        "CLI Blackjack B: Good game logic but no option to quit mid-game",
        "CLI Blackjack C: Provides feedback but has a confusing user interface",
        "CLI Blackjack D: Engaging but lacks multiple round support",
        "CLI Blackjack E: Accurate game logic but minimal user interaction"
    ],
    "Competitive Quadrant Chart": "quadrantChart\n    title \"Reach and engagement of CLI Blackjack games\"\n    x-axis \"Low Reach\" --> \"High Reach\"\n    y-axis \"Low Engagement\" --> \"High Engagement\"\n    quadrant-1 \"We should expand\"\n    quadrant-2 \"Need to promote\"\n    quadrant-3 \"Re-evaluate\"\n    quadrant-4 \"May be improved\"\n    \"CLI Blackjack A\": [0.2, 0.5]\n    \"CLI Blackjack B\": [0.4, 0.3]\n    \"CLI Blackjack C\": [0.6, 0.4]\n    \"CLI Blackjack D\": [0.7, 0.6]\n    \"CLI Blackjack E\": [0.5, 0.7]\n    \"Our Target Product\": [0.6, 0.8]",
    "Requirement Analysis": "The game should be easy to start and play from the command line, with clear instructions and feedback. It should support multiple rounds and allow players to quit at any time.",
    "Requirement Pool": [
        [
            "P0",
            "Implement the main game loop and logic"
        ],
        [
            "P0",
            "Display player's hand and score after each move"
        ],
        [
            "P1",
            "Provide feedback on game outcomes"
        ],
        [
            "P1",
            "Support multiple rounds without restarting"
        ],
        [
            "P2",
            "Implement a quit option"
        ]
    ],
    "UI Design draft": "The UI will be text-based, displaying the player's hand, score, and game instructions. It will use clear and concise text prompts for user interaction.",
    "Anything UNCLEAR": "Clarification needed on whether to include advanced features like betting or card counting."
}
[/CONTENT]
2024-12-30 12:02:03.673 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.015 | Max budget: $3.000 | Current cost: $0.015, prompt_tokens: 943, completion_tokens: 659
2024-12-30 12:02:03.680 | INFO     | metagpt.utils.git_repository:rename_root:219 - Rename directory /app/metagpt/workspace/20241230120151 to /app/metagpt/workspace/cli_blackjack_game
2024-12-30 12:02:03.683 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/docs/prd/20241230120203.json
2024-12-30 12:02:03.685 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/competitive_analysis/20241230120203.pdf..
2024-12-30 12:02:05.650 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:05.650 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/competitive_analysis/20241230120203.svg..
2024-12-30 12:02:06.585 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:06.585 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/competitive_analysis/20241230120203.png..
2024-12-30 12:02:07.569 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:07.571 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/resources/prd/20241230120203.md
2024-12-30 12:02:07.574 | INFO     | metagpt.roles.role:_act:403 - Bob(Architect): to do WriteDesign(WriteDesign)
[CONTENT]
{
    "Implementation approach": "We will implement a command-line interface (CLI) Blackjack game using Python. The game will focus on simplicity and user engagement, ensuring clear instructions and feedback. We will use the 'cmd' module from Python's standard library to handle the command-line interface, which will allow us to manage user inputs and game flow effectively. The game logic will be implemented in a separate module to maintain clean separation of concerns. We will not include advanced features like betting or card counting at this stage to keep the game simple and focused on core Blackjack mechanics.",
    "File list": [
        "main.py",
        "game.py"
    ],
    "Data structures and interfaces": "\nclassDiagram\n    class Main {\n        +start_game() void\n    }\n    class Game {\n        -Deck deck\n        -Player player\n        -Dealer dealer\n        +play_round() void\n        +get_winner() str\n        +reset_game() void\n    }\n    class Deck {\n        -cards list\n        +shuffle() void\n        +deal_card() Card\n    }\n    class Player {\n        -hand list\n        +add_card(card: Card) void\n        +calculate_score() int\n        +clear_hand() void\n    }\n    class Dealer {\n        -hand list\n        +add_card(card: Card) void\n        +calculate_score() int\n        +clear_hand() void\n    }\n    class Card {\n        -suit str\n        -value str\n        +get_value() int\n    }\n    Main --> Game\n    Game --> Deck\n    Game --> Player\n    Game --> Dealer\n    Deck --> Card\n    Player --> Card\n    Dealer --> Card\n",
    "Program call flow": "\nsequenceDiagram\n    participant M as Main\n    participant G as Game\n    participant D as Deck\n    participant P as Player\n    participant DL as Dealer\n    participant C as Card\n    M->>G: start_game()\n    G->>D: shuffle()\n    loop Each Round\n        G->>D: deal_card()\n        D-->>G: return Card\n        G->>P: add_card(Card)\n        G->>DL: add_card(Card)\n        P->>C: get_value()\n        DL->>C: get_value()\n        G->>P: calculate_score()\n        G->>DL: calculate_score()\n        G->>G: get_winner()\n    end\n    G->>G: reset_game()\n",
    "Anything UNCLEAR": "Clarification needed on whether to include advanced features like betting or card counting, but for now, we will focus on the basic game mechanics."
}
[/CONTENT]
2024-12-30 12:02:14.902 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.030 | Max budget: $3.000 | Current cost: $0.015, prompt_tokens: 1284, completion_tokens: 585
2024-12-30 12:02:14.907 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/docs/system_design/20241230120203.json
2024-12-30 12:02:14.908 | INFO     | metagpt.utils.file_repository:save:62 - update dependency: /app/metagpt/workspace/cli_blackjack_game/docs/system_design/20241230120203.json:{'docs/prd/20241230120203.json'}
2024-12-30 12:02:14.909 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/data_api_design/20241230120203.pdf..
2024-12-30 12:02:15.968 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:15.968 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/data_api_design/20241230120203.svg..
2024-12-30 12:02:16.984 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:16.984 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/data_api_design/20241230120203.png..
2024-12-30 12:02:18.072 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:18.072 | INFO     | metagpt.actions.design_api:_save_data_api_design:107 - Save class view to /app/metagpt/workspace/cli_blackjack_game/resources/data_api_design/20241230120203
2024-12-30 12:02:18.075 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/seq_flow/20241230120203.pdf..
2024-12-30 12:02:19.084 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:19.085 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/seq_flow/20241230120203.svg..
2024-12-30 12:02:20.062 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:20.063 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/cli_blackjack_game/resources/seq_flow/20241230120203.png..
2024-12-30 12:02:21.160 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:02:21.161 | INFO     | metagpt.actions.design_api:_save_seq_flow:116 - Saving sequence flow to /app/metagpt/workspace/cli_blackjack_game/resources/seq_flow/20241230120203
2024-12-30 12:02:21.162 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/resources/system_design/20241230120203.md
2024-12-30 12:02:21.166 | INFO     | metagpt.roles.role:_act:403 - Eve(Project Manager): to do WriteTasks(WriteTasks)
[CONTENT]
{
    "Required packages": [
        "No third-party dependencies required"
    ],
    "Required Other language third-party packages": [
        "No third-party dependencies required"
    ],
    "Logic Analysis": [
        [
            "game.py",
            "Contains Game class with methods play_round(), get_winner(), and reset_game(). It also includes Deck, Player, Dealer, and Card classes with their respective methods."
        ],
        [
            "main.py",
            "Contains Main class with start_game() method, imports Game class from game.py."
        ]
    ],
    "Task list": [
        "game.py",
        "main.py"
    ],
    "Full API spec": "",
    "Shared Knowledge": "`game.py` contains the core game logic and classes that are shared across the project.",
    "Anything UNCLEAR": "Clarification needed on whether to include advanced features like betting or card counting, but for now, we will focus on the basic game mechanics."
}
[/CONTENT]
2024-12-30 12:02:24.590 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.038 | Max budget: $3.000 | Current cost: $0.008, prompt_tokens: 1077, completion_tokens: 206
2024-12-30 12:02:24.596 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/docs/task/20241230120203.json
2024-12-30 12:02:24.598 | INFO     | metagpt.utils.file_repository:save:62 - update dependency: /app/metagpt/workspace/cli_blackjack_game/docs/task/20241230120203.json:{'docs/system_design/20241230120203.json'}
2024-12-30 12:02:24.599 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/requirements.txt
2024-12-30 12:02:24.691 | INFO     | metagpt.actions.write_code:run:141 - Writing game.py..
## Code: game.py
```python
## game.py

import random
from typing import List

class Card:
    def __init__(self, suit: str, value: str):
        self.suit = suit
        self.value = value

    def get_value(self) -> int:
        """Returns the Blackjack value of the card."""
        if self.value in ['J', 'Q', 'K']:
            return 10
        elif self.value == 'A':
            return 11  # Ace can be 1 or 11, but initially consider it as 11
        else:
            return int(self.value)

class Deck:
    def __init__(self):
        self.cards: List[Card] = self._generate_deck()
        self.shuffle()

    def _generate_deck(self) -> List[Card]:
        """Generates a standard deck of 52 cards."""
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        return [Card(suit, value) for suit in suits for value in values]

    def shuffle(self) -> None:
        """Shuffles the deck."""
        random.shuffle(self.cards)

    def deal_card(self) -> Card:
        """Deals a card from the deck."""
        return self.cards.pop()

class Player:
    def __init__(self):
        self.hand: List[Card] = []

    def add_card(self, card: Card) -> None:
        """Adds a card to the player's hand."""
        self.hand.append(card)

    def calculate_score(self) -> int:
        """Calculates the score of the player's hand."""
        score = 0
        aces = 0
        for card in self.hand:
            score += card.get_value()
            if card.value == 'A':
                aces += 1
        while score > 21 and aces:
            score -= 10
            aces -= 1
        return score

    def clear_hand(self) -> None:
        """Clears the player's hand."""
        self.hand.clear()

class Dealer(Player):
    """Dealer class inherits from Player."""
    pass

class Game:
    def __init__(self):
        self.deck = Deck()
        self.player = Player()
        self.dealer = Dealer()

    def play_round(self) -> None:
        """Plays a round of Blackjack."""
        self.player.clear_hand()
        self.dealer.clear_hand()
        self.deck.shuffle()

        # Initial dealing
        for _ in range(2):
            self.player.add_card(self.deck.deal_card())
            self.dealer.add_card(self.deck.deal_card())

        # Player's turn
        while self.player.calculate_score() < 17:  # Simple strategy: hit until 17
            self.player.add_card(self.deck.deal_card())

        # Dealer's turn
        while self.dealer.calculate_score() < 17:
            self.dealer.add_card(self.deck.deal_card())

    def get_winner(self) -> str:
        """Determines the winner of the round."""
        player_score = self.player.calculate_score()
        dealer_score = self.dealer.calculate_score()

        if player_score > 21:
            return "Dealer wins!"
        elif dealer_score > 21 or player_score > dealer_score:
            return "Player wins!"
        elif player_score < dealer_score:
            return "Dealer wins!"
        else:
            return "It's a tie!"

    def reset_game(self) -> None:
        """Resets the game for a new round."""
        self.player.clear_hand()
        self.dealer.clear_hand()
        self.deck = Deck()
```

2024-12-30 12:02:36.285 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.056 | Max budget: $3.000 | Current cost: $0.018, prompt_tokens: 1131, completion_tokens: 790
2024-12-30 12:02:36.288 | INFO     | metagpt.actions.write_code_review:run:185 - Code review and rewrite game.py: 1/2 | len(iterative_code)=3254, len(self.i_context.code_doc.content)=3254
## Code Review: game.py
1. Yes, the code is implemented as per the requirements. It provides a basic Blackjack game with the necessary classes and methods.
2. Yes, the code logic is correct. The game correctly handles card dealing, score calculation, and determining the winner.
3. Yes, the existing code follows the "Data structures and interfaces" as described in the system design.
4. Yes, all functions are implemented as required. The methods for dealing cards, calculating scores, and determining the winner are all present.
5. Yes, all necessary pre-dependencies have been imported. The code uses Python's standard library, and no additional imports are needed.
6. Yes, methods from other files are being reused correctly. The `Game` class is designed to be imported and used in `main.py`.

## Actions
pass

## Code Review Result
LGTM
2024-12-30 12:02:40.533 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.070 | Max budget: $3.000 | Current cost: $0.014, prompt_tokens: 2264, completion_tokens: 178
2024-12-30 12:02:40.535 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/cli_blackjack_game/game.py
2024-12-30 12:02:40.537 | INFO     | metagpt.utils.file_repository:save:62 - update dependency: /app/metagpt/workspace/cli_blackjack_game/cli_blackjack_game/game.py:['docs/task/20241230120203.json', 'docs/system_design/20241230120203.json']
2024-12-30 12:02:40.538 | INFO     | metagpt.actions.write_code:run:141 - Writing main.py..
## Code: main.py
```python
## main.py

import cmd
from game import Game

class Main(cmd.Cmd):
    """Command-line interface for the Blackjack game."""
    
    intro = "Welcome to Blackjack! Type 'start' to begin a new game or 'help' for a list of commands."
    prompt = "(Blackjack) "

    def __init__(self):
        super().__init__()
        self.game = Game()

    def do_start(self, arg):
        """Start a new game of Blackjack."""
        print("Starting a new game...")
        self.game.play_round()
        winner = self.game.get_winner()
        print(f"Round over. {winner}")
        self.game.reset_game()

    def do_quit(self, arg):
        """Quit the game."""
        print("Thank you for playing Blackjack!")
        return True

    def do_help(self, arg):
        """List available commands."""
        print("Available commands:")
        print("  start - Start a new game of Blackjack")
        print("  quit  - Quit the game")
        print("  help  - Show this help message")

if __name__ == '__main__':
    Main().cmdloop()
```

This code provides a command-line interface for the Blackjack game using Python's `cmd` module. It allows users to start a new game, view help, and quit the game. The `Main` class manages the game flow by interacting with the `Game` class from `game.py`.
2024-12-30 12:02:44.129 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.084 | Max budget: $3.000 | Current cost: $0.014, prompt_tokens: 1917, completion_tokens: 304
2024-12-30 12:02:44.132 | INFO     | metagpt.actions.write_code_review:run:185 - Code review and rewrite main.py: 1/2 | len(iterative_code)=1025, len(self.i_context.code_doc.content)=1025
## Code Review: main.py
1. Yes, the code is implemented as per the requirements. It provides a command-line interface for the Blackjack game using the `cmd` module and interacts with the `Game` class from `game.py`.
2. Yes, the code logic is correct. The game starts, plays a round, determines the winner, and resets for a new game as expected.
3. Yes, the existing code follows the "Data structures and interfaces" as described in the system design. The `Main` class interacts with the `Game` class appropriately.
4. Yes, all functions are implemented. The `do_start`, `do_quit`, and `do_help` methods are correctly defined and serve their intended purposes.
5. Yes, all necessary pre-dependencies have been imported. The `cmd` module and the `Game` class from `game.py` are imported correctly.
6. Yes, methods from other files are being reused correctly. The `Game` class methods are called appropriately within the `Main` class.

## Actions
pass

## Code Review Result
LGTM
2024-12-30 12:02:49.894 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.100 | Max budget: $3.000 | Current cost: $0.016, prompt_tokens: 2506, completion_tokens: 224
2024-12-30 12:02:49.897 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/cli_blackjack_game/cli_blackjack_game/main.py
2024-12-30 12:02:49.898 | INFO     | metagpt.utils.file_repository:save:62 - update dependency: /app/metagpt/workspace/cli_blackjack_game/cli_blackjack_game/main.py:['docs/task/20241230120203.json', 'docs/system_design/20241230120203.json']
2024-12-30 12:02:49.908 | INFO     | metagpt.roles.engineer:_act_summarize:190 - --max-auto-summarize-code=0
2024-12-30 12:02:49.908 | WARNING  | metagpt.environment.base_env:publish_message:192 - Message no recipients: {"id":"5f3cca57a5e54badaea1ee7b3253b294","content":"","role":"Engineer","cause_by":"metagpt.actions.summarize_code.SummarizeCode","sent_from":"metagpt.roles.engineer.Engineer","send_to":["Edward"]}
2024-12-30 12:02:49.943 | INFO     | metagpt.utils.git_repository:archive:168 - Archive: ['.dependencies.json', 'cli_blackjack_game/game.py', 'cli_blackjack_game/main.py', 'docs/prd/20241230120203.json', 'docs/requirement.txt', 'docs/system_design/20241230120203.json', 'docs/task/20241230120203.json', 'requirements.txt', 'resources/competitive_analysis/20241230120203.mmd', 'resources/competitive_analysis/20241230120203.pdf', 'resources/competitive_analysis/20241230120203.png', 'resources/competitive_analysis/20241230120203.svg', 'resources/data_api_design/20241230120203.mmd', 'resources/data_api_design/20241230120203.pdf', 'resources/data_api_design/20241230120203.png', 'resources/data_api_design/20241230120203.svg', 'resources/prd/20241230120203.md', 'resources/seq_flow/20241230120203.mmd', 'resources/seq_flow/20241230120203.pdf', 'resources/seq_flow/20241230120203.png', 'resources/seq_flow/20241230120203.svg', 'resources/system_design/20241230120203.md']
````

根据提示，生成的游戏程序入口在 `/app/metagpt/workspace/cli_blackjack_game/cli_blackjack_game/main.py`

```python
## main.py

import cmd
from game import Game

class Main(cmd.Cmd):
    """Command-line interface for the Blackjack game."""
    
    intro = "Welcome to Blackjack! Type 'start' to begin a new game or 'help' for a list of commands."
    prompt = "(Blackjack) "

    def __init__(self):
        super().__init__()
        self.game = Game()

    def do_start(self, arg):
        """Start a new game of Blackjack."""
        print("Starting a new game...")
        self.game.play_round()
        winner = self.game.get_winner()
        print(f"Round over. {winner}")
        self.game.reset_game()

    def do_quit(self, arg):
        """Quit the game."""
        print("Thank you for playing Blackjack!")
        return True

    def do_help(self, arg):
        """List available commands."""
        print("Available commands:")
        print("  start - Start a new game of Blackjack")
        print("  quit  - Quit the game")
        print("  help  - Show this help message")

if __name__ == '__main__':
    Main().cmdloop()

```

## 智能体概念

智能体 = 大语言模型 + 观察 + 思考 + 行动 + 记忆

多智能体系统 = 智能体 + 环境 + 标准操作程序 (SOP) + 通信 + 经济

## 智能体

### 使用现成的智能体

```python
import asyncio

from metagpt.context import Context
from metagpt.roles.product_manager import ProductManager
from metagpt.logs import logger

async def main():
    msg = "Write a PRD for a snake game" # PRD = 产品需求文档
    context = Context()  # 显式创建会话Context对象，Role对象会隐式的自动将它共享给自己的Action对象
    role = ProductManager(context=context)
    while msg:
        msg = await role.run(msg)
        logger.info(str(msg))

if __name__ == '__main__':
    asyncio.run(main())
```

```python
root@codespaces-f27eab:/workspaces/MetaGPT# /usr/local/bin/python /workspaces/MetaGPT/my_practice/1.py
2024-12-30 12:24:40.652 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /app/metagpt
2024-12-30 12:24:43.434 | INFO     | metagpt.roles.role:_act:403 - Alice(Product Manager): to do PrepareDocuments(PrepareDocuments)
2024-12-30 12:24:43.501 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/20241230122443/docs/requirement.txt
2024-12-30 12:24:43.501 | INFO     | metagpt.roles.role:_act:403 - Alice(Product Manager): to do WritePRD(WritePRD)
2024-12-30 12:24:43.502 | INFO     | metagpt.actions.write_prd:run:86 - New requirement detected: Write a PRD for a snake game
[CONTENT]
{
    "Language": "en_us",
    "Programming Language": "Python",
    "Original Requirements": "Write a PRD for a snake game",
    "Project Name": "snake_game",
    "Product Goals": [
        "Create an engaging and addictive gameplay experience",
        "Ensure the game is accessible and responsive across devices",
        "Design a visually appealing and intuitive user interface"
    ],
    "User Stories": [
        "As a player, I want to control the snake using arrow keys or swipe gestures",
        "As a player, I want to see my current score and high score during gameplay",
        "As a player, I want to be able to pause and resume the game",
        "As a player, I want to have the option to restart the game at any time",
        "As a player, I want the game to be playable on both desktop and mobile devices"
    ],
    "Competitive Analysis": [
        "Classic Snake Game: Simple design, lacks modern features",
        "Slither.io: Multiplayer mode, lacks single-player focus",
        "Snake vs Block: Innovative gameplay, but not a traditional snake game",
        "Snake '97: Nostalgic design, limited to retro style",
        "Snake Game by Google: Minimalistic design, lacks customization options"
    ],
    "Competitive Quadrant Chart": "quadrantChart\n    title \"Reach and engagement of snake games\"\n    x-axis \"Low Reach\" --> \"High Reach\"\n    y-axis \"Low Engagement\" --> \"High Engagement\"\n    quadrant-1 \"We should expand\"\n    quadrant-2 \"Need to promote\"\n    quadrant-3 \"Re-evaluate\"\n    quadrant-4 \"May be improved\"\n    \"Classic Snake Game\": [0.2, 0.4]\n    \"Slither.io\": [0.8, 0.7]\n    \"Snake vs Block\": [0.6, 0.5]\n    \"Snake '97\": [0.3, 0.3]\n    \"Snake Game by Google\": [0.5, 0.6]\n    \"Our Target Product\": [0.7, 0.8]",
    "Requirement Analysis": "The game should be simple yet challenging, with intuitive controls and a clear scoring system. It should be responsive and accessible on various devices, providing a seamless user experience.",
    "Requirement Pool": [
        [
            "P0",
            "Implement the core snake movement and growth mechanics"
        ],
        [
            "P0",
            "Develop a scoring system that tracks current and high scores"
        ],
        [
            "P1",
            "Design a responsive UI for both desktop and mobile"
        ],
        [
            "P1",
            "Add pause and resume functionality"
        ],
        [
            "P2",
            "Include sound effects and background music"
        ]
    ],
    "UI Design draft": "The UI should feature a clean and modern design with a focus on the game grid. Controls should be easily accessible, and the score should be prominently displayed. The layout should adapt to different screen sizes for optimal playability.",
    "Anything UNCLEAR": "Clarification needed on whether the game should include any multiplayer features or power-ups."
}
[/CONTENT]
2024-12-30 12:25:02.726 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.015 | Max budget: $10.000 | Current cost: $0.015, prompt_tokens: 946, completion_tokens: 685
2024-12-30 12:25:02.734 | INFO     | metagpt.utils.git_repository:rename_root:219 - Rename directory /app/metagpt/workspace/20241230122443 to /app/metagpt/workspace/snake_game
2024-12-30 12:25:02.736 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/snake_game/docs/prd/20241230122502.json
2024-12-30 12:25:02.738 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/snake_game/resources/competitive_analysis/20241230122502.pdf..
2024-12-30 12:25:03.681 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:25:03.681 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/snake_game/resources/competitive_analysis/20241230122502.svg..
2024-12-30 12:25:04.621 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:25:04.622 | INFO     | metagpt.utils.mermaid:mermaid_to_file:44 - Generating /app/metagpt/workspace/snake_game/resources/competitive_analysis/20241230122502.png..
2024-12-30 12:25:05.646 | INFO     | metagpt.utils.mermaid:mermaid_to_file:68 - Generating single mermaid chart

2024-12-30 12:25:05.647 | INFO     | metagpt.utils.file_repository:save:57 - save to: /app/metagpt/workspace/snake_game/resources/prd/20241230122502.md
2024-12-30 12:25:05.649 | INFO     | __main__:main:14 - Alice(Product Manager): {'docs': {'20241230122502.json': {'root_path': 'docs/prd', 'filename': '20241230122502.json', 'content': '{"Language":"en_us","Programming Language":"Python","Original Requirements":"Write a PRD for a snake game","Project Name":"snake_game","Product Goals":["Create an engaging and addictive gameplay experience","Ensure the game is accessible and responsive across devices","Design a visually appealing and intuitive user interface"],"User Stories":["As a player, I want to control the snake using arrow keys or swipe gestures","As a player, I want to see my current score and high score during gameplay","As a player, I want to be able to pause and resume the game","As a player, I want to have the option to restart the game at any time","As a player, I want the game to be playable on both desktop and mobile devices"],"Competitive Analysis":["Classic Snake Game: Simple design, lacks modern features","Slither.io: Multiplayer mode, lacks single-player focus","Snake vs Block: Innovative gameplay, but not a traditional snake game","Snake \'97: Nostalgic design, limited to retro style","Snake Game by Google: Minimalistic design, lacks customization options"],"Competitive Quadrant Chart":"quadrantChart\\n    title \\"Reach and engagement of snake games\\"\\n    x-axis \\"Low Reach\\" --> \\"High Reach\\"\\n    y-axis \\"Low Engagement\\" --> \\"High Engagement\\"\\n    quadrant-1 \\"We should expand\\"\\n    quadrant-2 \\"Need to promote\\"\\n    quadrant-3 \\"Re-evaluate\\"\\n    quadrant-4 \\"May be improved\\"\\n    \\"Classic Snake Game\\": [0.2, 0.4]\\n    \\"Slither.io\\": [0.8, 0.7]\\n    \\"Snake vs Block\\": [0.6, 0.5]\\n    \\"Snake \'97\\": [0.3, 0.3]\\n    \\"Snake Game by Google\\": [0.5, 0.6]\\n    \\"Our Target Product\\": [0.7, 0.8]","Requirement Analysis":"The game should be simple yet challenging, with intuitive controls and a clear scoring system. It should be responsive and accessible on various devices, providing a seamless user experience.","Requirement Pool":[["P0","Implement the core snake movement and growth mechanics"],["P0","Develop a scoring system that tracks current and high scores"],["P1","Design a responsive UI for both desktop and mobile"],["P1","Add pause and resume functionality"],["P2","Include sound effects and background music"]],"UI Design draft":"The UI should feature a clean and modern design with a focus on the game grid. Controls should be easily accessible, and the score should be prominently displayed. The layout should adapt to different screen sizes for optimal playability.","Anything UNCLEAR":"Clarification needed on whether the game should include any multiplayer features or power-ups."}'}}}
2024-12-30 12:25:05.649 | INFO     | __main__:main:14 - None
```

根据提示，运行结果在`/app/metagpt/workspace/snake_game/`

### 具有多重动作的智能体

```python
"""
文件名: MetaGPT/examples/build_customized_agent.py
创建日期: 2023年9月19日 星期二 下午6:52:25
作者: garylin2099
"""

import asyncio
import re
import subprocess

import fire

from metagpt.actions import Action
from metagpt.logs import logger
from metagpt.roles.role import Role, RoleReactMode
from metagpt.schema import Message


class SimpleWriteCode(Action):
    """
    基于提供的指令生成Python代码的动作类。

    属性:
        PROMPT_TEMPLATE (str): 用于生成代码编写提示的模板。
        name (str): 动作名称。
    """

    PROMPT_TEMPLATE: str = """
    Write a python function that can {instruction} and provide two runnable test cases.
    Return ```python your_code_here ``` with NO other texts,
    your code:
    """
    name: str = "SimpleWriteCode"

    async def run(self, instruction: str):
        """
        根据指令生成Python代码。

        参数:
            instruction (str): 描述要实现功能的指令。

        返回:
            str: 从模型响应中提取的Python代码。
        """
        prompt = self.PROMPT_TEMPLATE.format(instruction=instruction)
        rsp = await self._aask(prompt)
        code_text = SimpleWriteCode.parse_code(rsp)
        return code_text

    @staticmethod
    def parse_code(rsp):
        """
        从响应中提取包含在markdown代码块中的Python代码。

        参数:
            rsp (str): 包含代码块的响应字符串。

        返回:
            str: 提取的Python代码，如果未找到代码块，则返回原始响应。
        """
        pattern = r"```python(.*)```"
        match = re.search(pattern, rsp, re.DOTALL)
        code_text = match.group(1) if match else rsp
        return code_text


class SimpleRunCode(Action):
    """
    运行Python代码并捕获其输出的动作类。

    属性:
        name (str): 动作名称。
    """

    name: str = "SimpleRunCode"

    async def run(self, code_text: str):
        """
        子进程运行Python代码，捕获输出。

        参数:
            code_text (str): 要执行的Python代码。

        返回:
            str: 运行代码的输出结果。
        """
        result = subprocess.run(
            ["python3", "-c", code_text], capture_output=True, text=True
        )
        code_result = result.stdout
        logger.info(f"{code_result=}")
        return code_result


class SimpleCoder(Role):
    """
    表示一个能够根据指令编写Python代码的角色。

    属性:
        name (str): 角色名称。
        profile (str): 角色标识。
    """

    name: str = "Alice"
    profile: str = "SimpleCoder"

    def __init__(self, **kwargs):
        """
        初始化SimpleCoder角色，并设置可用的动作。
        """
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteCode])

    async def _act(self) -> Message:
        """
        执行当前动作，并生成对应的消息。

        返回:
            Message: 包含生成代码的消息。
        """
        logger.info(f"{self._setting}: to do {self.rc.todo}({self.rc.todo.name})")
        todo = self.rc.todo  # 当前要执行的动作
        msg = self.get_memories(k=1)[0]  # 获取最近的一条消息
        code_text = await todo.run(msg.content)
        msg = Message(content=code_text, role=self.profile, cause_by=type(todo))
        return msg


class RunnableCoder(Role):
    """
    表示一个能够编写和运行Python代码的角色。

    属性:
        name (str): 角色名称。
        profile (str): 角色标识。
    """

    name: str = "Alice"
    profile: str = "RunnableCoder"

    def __init__(self, **kwargs):
        """
        初始化RunnableCoder角色，设置可用的动作和响应模式。
        """
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteCode, SimpleRunCode])
        self._set_react_mode(react_mode=RoleReactMode.BY_ORDER.value)

    async def _act(self) -> Message:
        """
        按顺序执行动作，并生成对应的消息。

        返回:
            Message: 包含生成代码或执行结果的消息。
        """
        logger.info(f"{self._setting}: to do {self.rc.todo}({self.rc.todo.name})")
        todo = self.rc.todo  # 当前要执行的动作
        msg = self.get_memories(k=1)[0]  # 获取最近的一条消息
        result = await todo.run(msg.content)
        msg = Message(content=result, role=self.profile, cause_by=type(todo))
        self.rc.memory.add(msg)
        return msg


def main(msg="write a function that calculates the product of a list and run it"):
    """
    主函数，用于初始化角色并执行其动作。

    参数:
        msg (str): 提供给角色处理的指令消息。
    """
    role = RunnableCoder()  # 实例化RunnableCoder角色
    logger.info(msg)
    result = asyncio.run(role.run(msg))
    logger.info(result)


if __name__ == "__main__":
    fire.Fire(main)
```

````bash
root@codespaces-f27eab:/workspaces/MetaGPT# python3 examples/build_customized_agent.py --msg "write a function that calculates the product of a list"
2024-12-30 13:09:07.719 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /app/metagpt
2024-12-30 13:09:11.378 | INFO     | __main__:main:99 - write a function that calculates the product of a list
2024-12-30 13:09:11.380 | INFO     | __main__:_act:83 - Alice(RunnableCoder): to do SimpleWriteCode(SimpleWriteCode)
```python
def create_product_function():
    def product_of_list(lst):
        product = 1
        for num in lst:
            product *= num
        return product
    return product_of_list

# Test cases
product_function = create_product_function()

# Test case 1
test_list_1 = [1, 2, 3, 4]
print(product_function(test_list_1))  # Expected output: 24

# Test case 2
test_list_2 = [5, 6, 7]
print(product_function(test_list_2))  # Expected output: 210
```
2024-12-30 13:09:14.884 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.002 | Max budget: $10.000 | Current cost: $0.002, prompt_tokens: 68, completion_tokens: 129
2024-12-30 13:09:14.885 | INFO     | __main__:_act:83 - Alice(RunnableCoder): to do SimpleRunCode(SimpleRunCode)
2024-12-30 13:09:14.925 | INFO     | __main__:run:50 - code_result='24\n210\n'
2024-12-30 13:09:14.927 | INFO     | __main__:main:101 - RunnableCoder: 24
210
````

## 多智能体

代码中有3个智能体，分别是程序员、测试员、审查员

需要为每个智能体定义动作（Action），将Action分配到Role中

```python
"""
文件名: MetaGPT/examples/build_customized_multi_agents.py
创建日期: 2023年11月15日，星期三，19:12:39
作者: garylin2099
"""

# 正则表达式
import re

# Fire 用于命令行接口
import fire

# MetaGPT
from metagpt.actions import Action, UserRequirement
from metagpt.logs import logger
from metagpt.roles import Role
from metagpt.schema import Message
from metagpt.team import Team

# 从输入字符串中提取 Python 代码
def parse_code(rsp):
    pattern = r"```python(.*)```"  # 匹配代码块的正则表达式
    match = re.search(pattern, rsp, re.DOTALL)  # 匹配整个字符串，包括换行符
    code_text = match.group(1) if match else rsp  # 如果找到匹配，提取代码；否则返回原文本
    return code_text


# 写代码Action
class SimpleWriteCode(Action):
    PROMPT_TEMPLATE: str = """
    Write a python function that can {instruction}.
    Return ```python your_code_here ``` with NO other texts,
    your code:
    """
    name: str = "SimpleWriteCode"  

    # 异步运行Action，返回代码
    async def run(self, instruction: str):
        prompt = self.PROMPT_TEMPLATE.format(instruction=instruction)  # 将instruction插入到prompt中
        rsp = await self._aask(prompt)  # 使用 MetaGPT 的异步询问功能获取响应
        code_text = parse_code(rsp)  # 提取代码块
        return code_text


# 写代码Role
class SimpleCoder(Role):
    name: str = "Alice"
    profile: str = "SimpleCoder"  

    def __init__(self, **kwargs):
        super().__init__(**kwargs) # 调用父类（Role）的构造函数
        self._watch([UserRequirement])  # 监听用户需求
        self.set_actions([SimpleWriteCode])  # Action = SimpleWriteCode


# 写测试Action
class SimpleWriteTest(Action):
    PROMPT_TEMPLATE: str = """
    Context: {context}
    Write {k} unit tests using pytest for the given function, assuming you have imported it.
    Return ```python your_code_here ``` with NO other texts,
    your code:
    """
    name: str = "SimpleWriteTest"  # 动作的名称

    # 异步运行Action
    async def run(self, context: str, k: int = 3):
        prompt = self.PROMPT_TEMPLATE.format(context=context, k=k)  # 将context插入到prompt中
        rsp = await self._aask(prompt)  # 使用异步询问功能获取响应
        code_text = parse_code(rsp)  # 提取代码块
        return code_text


# 写测试Role
class SimpleTester(Role):
    name: str = "Bob"
    profile: str = "SimpleTester" 

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteTest])  # Action = SimpleWriteTest
        self._watch([SimpleWriteCode, SimpleWriteReview])  # 监听其他动作

    # 重写行为逻辑，返回Message
    async def _act(self) -> Message:
        logger.info(f"{self._setting}: to do {self.rc.todo}({self.rc.todo.name})")
        todo = self.rc.todo
        context = self.get_memories()  # 获取所有的记忆作为上下文
        code_text = await todo.run(context, k=5)  # 执行任务并指定参数
        msg = Message(content=code_text, role=self.profile, cause_by=type(todo))
        return msg


# 评审Action （对测试用例的评审）
class SimpleWriteReview(Action):
    PROMPT_TEMPLATE: str = """
    Context: {context}
    Review the test cases and provide one critical comments:
    """
    name: str = "SimpleWriteReview"  

    # 异步运行Action
    async def run(self, context: str):
        prompt = self.PROMPT_TEMPLATE.format(context=context)
        rsp = await self._aask(prompt)
        return rsp


# 评审Role （对测试用例的评审）
class SimpleReviewer(Role):
    name: str = "Charlie"
    profile: str = "SimpleReviewer" 

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteReview])  # Action = SimpleWriteReview
        self._watch([SimpleWriteTest])  # 监听SimpleWriteTest


async def main(
    idea: str = "write a function that calculates the product of a list",
    investment: float = 3.0,
    n_round: int = 5,
    add_human: bool = False,
):
    logger.info(idea) 

    team = Team()  # 创建团队对象
    team.hire(
        [
            SimpleCoder(),  # 招募编码Role
            SimpleTester(),  # 招募测试Role
            SimpleReviewer(is_human=add_human),  # 招募评审Role
        ]
    )

    team.invest(investment=investment)  # 投资团队
    team.run_project(idea)  # 开始项目
    await team.run(n_round=n_round)  # 运行多个回合


if __name__ == "__main__":
    fire.Fire(main)  # Fire 构建命令行入口
```

运行结果：

````bash
/home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/examples/build_customized_multi_agents.py
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ /home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/examples/build_customized_multi_agents.py
2025-01-16 10:02:24.913 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /workspaces/MetaGPT-learn
2025-01-16 10:02:31.495 | INFO     | __main__:main:126 - write a function that calculates the product of a list
2025-01-16 10:02:31.528 | INFO     | metagpt.team:invest:93 - Investment: $3.0.
2025-01-16 10:02:31.529 | INFO     | metagpt.roles.role:_act:403 - Alice(SimpleCoder): to do SimpleWriteCode(SimpleWriteCode)
```python
def calculate_product(lst):
    product = 1
    for num in lst:
        product *= num
    return product
```
2025-01-16 10:02:34.012 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.001 | Max budget: $3.000 | Current cost: $0.001, prompt_tokens: 65, completion_tokens: 30
2025-01-16 10:02:34.016 | INFO     | __main__:_act:86 - Bob(SimpleTester): to do SimpleWriteTest(SimpleWriteTest)
```python
import pytest
from your_module import calculate_product

def test_product_of_positive_numbers():
    assert calculate_product([1, 2, 3, 4]) == 24

def test_product_with_zero():
    assert calculate_product([1, 2, 0, 4]) == 0

def test_product_of_negative_numbers():
    assert calculate_product([-1, -2, -3]) == -6

def test_product_of_mixed_numbers():
    assert calculate_product([-1, 2, -3, 4]) == 24

def test_product_of_empty_list():
    assert calculate_product([]) == 1
```
2025-01-16 10:02:37.377 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.003 | Max budget: $3.000 | Current cost: $0.003, prompt_tokens: 111, completion_tokens: 136
2025-01-16 10:02:37.380 | INFO     | metagpt.roles.role:_act:403 - Charlie(SimpleReviewer): to do SimpleWriteReview(SimpleWriteReview)
The test cases provided for the `calculate_product` function are comprehensive and cover a variety of scenarios, including positive numbers, the presence of zero, negative numbers, mixed numbers, and an empty list. However, one critical comment is that the test suite could benefit from an additional test case that checks the behavior of the function with a list containing a single element. This would ensure that the function correctly handles the edge case where the list has only one number, which should return the number itself as the product. Here's a suggestion for the additional test case:

```python
def test_product_of_single_element():
    assert calculate_product([5]) == 5
```

This test would help confirm that the function correctly returns the single element when the list contains only one number.
2025-01-16 10:02:40.406 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.007 | Max budget: $3.000 | Current cost: $0.003, prompt_tokens: 223, completion_tokens: 154
2025-01-16 10:02:40.410 | INFO     | __main__:_act:86 - Bob(SimpleTester): to do SimpleWriteTest(SimpleWriteTest)
```python
import pytest
from your_module import calculate_product

def test_product_of_positive_numbers():
    assert calculate_product([1, 2, 3, 4]) == 24

def test_product_with_zero():
    assert calculate_product([1, 2, 0, 4]) == 0

def test_product_of_negative_numbers():
    assert calculate_product([-1, -2, -3]) == -6

def test_product_of_mixed_numbers():
    assert calculate_product([-1, 2, -3, 4]) == 24

def test_product_of_empty_list():
    assert calculate_product([]) == 1
```
2025-01-16 10:02:44.017 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.011 | Max budget: $3.000 | Current cost: $0.004, prompt_tokens: 405, completion_tokens: 136
2025-01-16 10:02:44.020 | INFO     | metagpt.roles.role:_act:403 - Charlie(SimpleReviewer): to do SimpleWriteReview(SimpleWriteReview)
The test cases for the `calculate_product` function are well-structured and cover a broad range of scenarios, including positive numbers, the presence of zero, negative numbers, mixed numbers, and an empty list. However, as previously noted, the test suite could be further improved by including a test case for a list containing a single element. This would ensure that the function correctly handles the edge case where the list has only one number, which should return the number itself as the product. Adding this test case would enhance the robustness of the test suite by confirming that the function behaves as expected in this specific scenario. Here's the suggested test case:

```python
def test_product_of_single_element():
    assert calculate_product([5]) == 5
```

Including this test would provide additional assurance that the function can handle lists of varying lengths, including the minimal case of a single-element list.
2025-01-16 10:02:47.381 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.016 | Max budget: $3.000 | Current cost: $0.005, prompt_tokens: 517, completion_tokens: 178
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ 
````

## 记忆

`Role` 的记忆是 `Message` 的列表。 `Role` 存储其后续 `_observe` 的每个 `Message` 。

### 获取（检索）记忆

当需要记忆时，可以使用 `self.get_memories`

函数定义如下：

```python
def get_memories(self, k=0) -> list[Message]:
    """A wrapper to return the most recent k memories of this role, return all when k=0"""
    return self.rc.memory.get(k=k)
```

在上一节 多智能体 中，我们调用 get_memories 为测试员提供完整的历史记录上下文。

```python
# context = self.get_memories(k=1)[0].content # 获取最近的记忆
context = self.get_memories() # 获取所有记忆
```

### 添加记忆

使用 `self.rc.memory.add(msg)` ，其中 `msg` 是 `Message` 类型

建议在定义 `_act` 逻辑时，将 动作的 `Message`输出添加到 `Role` 的记忆中。 `Role` 通常需要记住之前说过或做过的事情，以便采取下一步行动。

## 创建和使用工具

### 定义函数作为工具

**在 `metagpt/tools/libs` 中创建并放置您自己的函数，假设它是 `calculate_factorial.py` ，并添加装饰器 @register_tool 以将其注册为工具。**

> 注意确定`metagpt/tools/libs`的位置，不一定在仓库下。例如 `/opt/python/3.9.7/lib/python3.9/site-packages/metagpt/tools/libs`

```python
# metagpt/tools/libs/calculate_factorial.py
import math
from metagpt.tools.tool_registry import register_tool

# Register tool with the decorator
@register_tool()
def calculate_factorial(n):
    """
    Calculate the factorial of a non-negative integer.
    """
    if n < 0:
        raise ValueError("Input must be a non-negative integer")
    return math.factorial(n)
```

**然后在 `__init__.py` 添加对应工具名（纠正：似乎不加也可以）**

![image-20250116212759952](https://media.opennet.top/i/2025/01/16/xj2365-0.png)

**在 `main.py` 文件中使用 DataInterpreter 与您的自定义工具。**

> Data Interpreter 是一个通过代码解决数据相关问题的智能体。它理解用户需求，制定计划，编写执行代码，并在必要时使用工具。这些能力使其能够应对各种场景。
>
> https://docs.deepwisdom.ai/main/en/guide/use_cases/agent/interpreter/intro.html

```python
# main.py
import asyncio
from metagpt.roles.di.data_interpreter import DataInterpreter
from metagpt.tools.libs import calculate_factorial

async def main(requirement: str):
   role = DataInterpreter(tools=["calculate_factorial"])    # integrate the tool
   await role.run(requirement)

if __name__ == "__main__":
   requirement = "Please calculate the factorial of 5."
   asyncio.run(main(requirement))
```

运行结果：

````bash
/home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/main.py
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ /home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/main.py
2025-01-16 13:18:08.649 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /workspaces/MetaGPT-learn
```json
[
    {
        "task_id": "1",
        "dependent_task_ids": [],
        "instruction": "Calculate the factorial of 5",
        "task_type": "other"
    }
]
```
2025-01-16 13:18:15.940 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.003 | Max budget: $10.000 | Current cost: $0.003, prompt_tokens: 405, completion_tokens: 45
2025-01-16 13:18:15.942 | INFO     | metagpt.roles.role:_plan_and_act:489 - ready to take on task task_id='1' dependent_task_ids=[] instruction='Calculate the factorial of 5' task_type='other' code='' result='' is_success=False is_finished=False
2025-01-16 13:18:15.943 | INFO     | metagpt.tools.tool_recommend:recall_tools:194 - Recalled tools: 
['calculate_factorial']; Scores: [-1.0986]
```json
["calculate_factorial"]
```
2025-01-16 13:18:16.696 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.001 | Max budget: $10.000 | Current cost: $0.001, prompt_tokens: 161, completion_tokens: 9
2025-01-16 13:18:16.697 | INFO     | metagpt.tools.tool_recommend:recommend_tools:100 - Recommended tools: 
['calculate_factorial']
2025-01-16 13:18:16.697 | INFO     | metagpt.roles.di.data_interpreter:_write_code:153 - ready to WriteAnalysisCode
To calculate the factorial of 5, we will use the pre-defined tool `calculate_factorial` as described in the available tools. Let's proceed with the implementation.

```python
from metagpt/tools/libs/calculate_factorial import calculate_factorial

# Calculate the factorial of 5
factorial_of_5 = calculate_factorial(5)
factorial_of_5
```
2025-01-16 13:18:18.451 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.003 | Max budget: $10.000 | Current cost: $0.003, prompt_tokens: 370, completion_tokens: 78
  1 from metagpt/tools/libs/calculate_factorial import calculate_factorial                
  2                                                                                       
  3 # Calculate the factorial of 5                                                        
  4 factorial_of_5 = calculate_factorial(5)                                               
  5 factorial_of_5                                                                        
  6                                                                                       
  Cell In[1], line 1
    from metagpt/tools/libs/calculate_factorial import calculate_factorial
                ^
SyntaxError: invalid syntax

2025-01-16 13:18:20.506 | INFO     | metagpt.roles.di.data_interpreter:_write_code:153 - ready to WriteAnalysisCode
```python
from metagpt.tools.libs.calculate_factorial import calculate_factorial

# Calculate the factorial of 5
factorial_of_5 = calculate_factorial(5)
factorial_of_5
```
2025-01-16 13:18:21.494 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.006 | Max budget: $10.000 | Current cost: $0.003, prompt_tokens: 453, completion_tokens: 44
  1 from metagpt.tools.libs.calculate_factorial import calculate_factorial                
  2                                                                                       
  3 # Calculate the factorial of 5                                                        
  4 factorial_of_5 = calculate_factorial(5)                                               
  5 factorial_of_5                                                                        
  6                                                                                       
,120
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ 
````

可以发现它自动纠正了语法错误并执行代码

### 定义类作为工具

**在 `metagpt/tools/libs` 中创建并放置您自己的类，假设它是 `calculator.py` ，并添加装饰器@register_tool 以将其注册为工具。**

```python
# metagpt/tools/libs/calculator.py
import math
from metagpt.tools.tool_registry import register_tool

# 使用装饰器注册工具
# 标签 “math ”用于对工具进行分类，include_functions 列表指定了要包含的函数，这使得 `DataInterpreter` 可以选择并理解工具。
@register_tool(tags=["math"], include_functions=["__init__", "add", "subtract", "multiply", "divide", "factorial"])
class Calculator:
   """
   A simple calculator tool that performs basic arithmetic operations and calculates factorials.
   """

   @staticmethod
   def add(a, b):
       """
       Calculate the sum of two numbers.
       """
       return a + b

   @staticmethod
   def subtract(a, b):
       """
       Calculate the difference of two numbers.
       """
       return a - b

   @staticmethod
   def multiply(a, b):
       """
       Calculate the product of two numbers.
       """
       return a * b

   @staticmethod
   def divide(a, b):
       """
       Calculate the quotient of two numbers.
       """
       if b == 0:
           return "Error: Division by zero"
       else:
           return a / b

   @staticmethod
   def factorial(n):
       """
       Calculate the factorial of a non-negative integer.
       """
       if n < 0:
           raise ValueError("Input must be a non-negative integer")
       return math.factorial(n)
```

**在 `main.py` 中使用 DataInterpreter 和自定义工具**

```python
# main.py
import asyncio
from metagpt.roles.di.data_interpreter import DataInterpreter
from metagpt.tools.libs import calculator

async def main(requirement: str):
    role = DataInterpreter(tools=["Calculator"]) # integrate the tool
    await role.run(requirement)

if __name__ == "__main__":
    requirement = "Please calculate 5 plus 3 and then calculate the factorial of 5."
    asyncio.run(main(requirement))
```

执行结果

````bash
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ /home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/examples/tool_use/main.py
2025-01-16 13:35:49.613 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /workspaces/MetaGPT-learn
```json
[
    {
        "task_id": "1",
        "dependent_task_ids": [],
        "instruction": "Calculate 5 plus 3",
        "task_type": "other"
    },
    {
        "task_id": "2",
        "dependent_task_ids": [],
        "instruction": "Calculate the factorial of 5",
        "task_type": "other"
    }
]
```
2025-01-16 13:35:56.287 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.003 | Max budget: $10.000 | Current cost: $0.003, prompt_tokens: 413, completion_tokens: 84
2025-01-16 13:35:56.288 | INFO     | metagpt.roles.role:_plan_and_act:489 - ready to take on task task_id='1' dependent_task_ids=[] instruction='Calculate 5 plus 3' task_type='other' code='' result='' is_success=False is_finished=False
2025-01-16 13:35:56.289 | INFO     | metagpt.tools.tool_recommend:recall_tools:194 - Recalled tools: 
['Calculator']; Scores: [0.0]
```json
["Calculator"]
```
2025-01-16 13:35:56.748 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.001 | Max budget: $10.000 | Current cost: $0.001, prompt_tokens: 164, completion_tokens: 7
2025-01-16 13:35:56.749 | INFO     | metagpt.tools.tool_recommend:recommend_tools:100 - Recommended tools: 
['Calculator']
2025-01-16 13:35:56.749 | INFO     | metagpt.roles.di.data_interpreter:_write_code:153 - ready to WriteAnalysisCode
```python
from metagpt.tools.libs.calculator import Calculator

# Calculate 5 plus 3
result_addition = Calculator.add(5, 3)
result_addition
```
2025-01-16 13:35:57.724 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.006 | Max budget: $10.000 | Current cost: $0.006, prompt_tokens: 1136, completion_tokens: 39
  1 from metagpt.tools.libs.calculator import Calculator                                  
  2                                                                                       
  3 # Calculate 5 plus 3                                                                  
  4 result_addition = Calculator.add(5, 3)                                                
  5 result_addition                                                                       
  6                                                                                       
,8
2025-01-16 13:36:01.733 | INFO     | metagpt.roles.role:_plan_and_act:489 - ready to take on task task_id='2' dependent_task_ids=[] instruction='Calculate the factorial of 5' task_type='other' code='' result='' is_success=False is_finished=False
2025-01-16 13:36:01.734 | INFO     | metagpt.tools.tool_recommend:recall_tools:194 - Recalled tools: 
['Calculator']; Scores: [0.0]
```json
["Calculator"]
```
2025-01-16 13:36:02.275 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.001 | Max budget: $10.000 | Current cost: $0.001, prompt_tokens: 164, completion_tokens: 7
2025-01-16 13:36:02.276 | INFO     | metagpt.tools.tool_recommend:recommend_tools:100 - Recommended tools: 
['Calculator']
2025-01-16 13:36:02.276 | INFO     | metagpt.roles.di.data_interpreter:_write_code:153 - ready to WriteAnalysisCode
```python
# Calculate the factorial of 5 using the Calculator tool
result_factorial = Calculator.factorial(5)
result_factorial
```
2025-01-16 13:36:04.128 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.013 | Max budget: $10.000 | Current cost: $0.006, prompt_tokens: 1166, completion_tokens: 30
  1 # Calculate the factorial of 5 using the Calculator tool                              
  2 result_factorial = Calculator.factorial(5)                                            
  3 result_factorial                                                                      
  4                                                                                       
120
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ 
````

可发现 DataInterpreter 将其分解为 2 个任务，算加法再算阶乘

![image-20250116214053509](https://media.opennet.top/i/2025/01/16/xqr4co-0.png)

![image-20250116214109969](https://media.opennet.top/i/2025/01/16/xqujyr-0.png)

![image-20250116214124052](https://media.opennet.top/i/2025/01/16/xr6cmo-0.png)

## 人类参与

人类可以自己承担Role

重用 多智能体 章节的示例，只需要把 `team.hire` 中设置 `is_human=True`

```python
team.hire(
    [
        SimpleCoder(),
        SimpleTester(),
        # SimpleReviewer(), # the original line
        SimpleReviewer(is_human=True), # change to this line
    ]
)
```

运行时人类将作为 `SimpleReviewer` ，轮到 `SimpleReviewer` 工作时将要求人类输入。

![image-20250117105118576](https://media.opennet.top/i/2025/01/17/fpxa5v-0.png)

## 为 Role 或 Action 自定义 LLM

定义配置：使用默认配置或从 `~/.metagpt` 目录自定义配置。

分配配置：将特定的LLM配置分配给Action和Role。**配置的优先级如下：Action配置 > Role配置 > 全局配置（config2.yaml 中的配置）。**

团队互动：创建一个具有环境的团队并开始互动。

### 示例

考虑美国大选的直播环境。我们将创建三个角色：A、B 和 C。A 和 B 是两位候选人，C 是一名选民。

```python
from metagpt.config2 import Config
from metagpt.roles import Role
from metagpt.actions import Action
import asyncio
from metagpt.environment import Environment
from metagpt.team import Team


# gpt4o = Config.default() # 使用默认模型
gpt4 = Config.from_home("gpt-4o.yaml")  # ~/.metagpt/gpt-4o.yaml，使用来自文件的配置
gpt4t = Config.default()
gpt4t.llm.model = "gpt-4-turbo"  # 修改模型为 "gpt-4-turbo"
gpt35 = Config.default()
gpt35.llm.model = "gpt-3.5-turbo"  # 修改模型为 "gpt-3.5-turbo"

# 创建3个Action，其中a1的模型指定为gpt4t
a1 = Action(config=gpt4t, name="Say",
            instruction="Say your opinion with emotion and don't repeat it")
a2 = Action(
    name="Say", instruction="Say your opinion with emotion and don't repeat it")
a3 = Action(name="Vote",
            instruction="Vote for the candidate, and say why you vote for him/her")

# 创建3个Role. 代表 "民主党候选人," "共和党候选人," 和 "选民".
# 尽管A在Role配置中设置为使用gpt4，但由于Action配置的设置，它将使用带有模型gpt4的a1的配置。
A = Role(name="A", profile="Democratic candidate",
         goal="Win the election", actions=[a1], watch=[a2], config=gpt4)
# 由于B在Role配置中设置为使用gpt35，且a2无Action配置，因此B和a2都会使用Role配置，即gpt35。
B = Role(name="B", profile="Republican candidate",
         goal="Win the election", actions=[a2], watch=[a1], config=gpt35)
# 由于C没有设置任何配置，且a3也没有设置配置，因此C和a3都会使用全局配置，即gpt4o配置。
C = Role(name="C", profile="Voter", goal="Vote for the candidate",
         actions=[a3], watch=[a1, a2])

# 创建一个被描述为“美国大选现场直播”的环境。
env = Environment(desc="US election live broadcast")
team = Team(investment=10.0, env=env, roles=[A, B, C])
# 运行team，观察他们之间的协作。
asyncio.run(team.run(
    idea="Topic: climate change. Under 80 words per message.", send_to="A", n_round=3))
# await team.run(idea="Topic: climate change. Under 80 words per message.", send_to="A", n_round=3) # 若在Jupyter Notebook中运行
```

运行结果：

```bash
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ /home/codespace/.python/current/bin/python /workspaces/MetaGPT-learn/examples/custom_llm.py
2025-01-17 03:17:43.439 | INFO     | metagpt.const:get_metagpt_package_root:21 - Package root set to /workspaces/MetaGPT-learn
2025-01-17 03:17:47.392 | INFO     | metagpt.roles.role:_act:403 - A(Democratic candidate): to do Action(Say)
Climate change is an urgent crisis that demands immediate action. We are witnessing devastating impacts on our environment, from raging wildfires to catastrophic hurricanes. It's our responsibility to protect our planet for future generations. We need bold policies to reduce carbon emissions and invest in renewable energy. This is not just an environmental issue; it's a matter of justice for communities disproportionately affected by climate disasters. We must act now, with conviction and determination, to ensure a sustainable future.
2025-01-17 03:17:50.651 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.004 | Max budget: $10.000 | Current cost: $0.004, prompt_tokens: 84, completion_tokens: 91
2025-01-17 03:17:50.653 | INFO     | metagpt.roles.role:_act:403 - B(Republican candidate): to do Action(Say)
2025-01-17 03:17:50.661 | INFO     | metagpt.roles.role:_act:403 - C(Voter): to do Action(Vote)
B:I vote As a Republican candidate for the, I believe in protecting our environment and addressing climate change in a responsible manner. We must Democratic candidate prioritize innovation and market-based solutions to reduce. Climate emissions while supporting economic growth. It's crucial to strike change is a balance between environmental indeed a protection and economic prosperity for the benefit of all Americans critical issue. Let's work together to find practical that affects and effective solutions for us all, and a sustainable the candidate's commitment future.
2025-01-17 03:17:51.598 | INFO     | metagpt.utils.token_counter:count_input_tokens:433 - Warning: gpt-3.5-turbo may update over time. Returning num tokens assuming gpt-3.5-turbo-0125.
2025-01-17 03:17:51.600 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.000 | Max budget: $10.000 | Current cost: $0.000, prompt_tokens: 167, completion_tokens: 73
 to addressing it with bold policies and investments in renewable energy is crucial. Protecting our planet and ensuring a sustainable future is a responsibility we owe to future generations, and I support the candidate's vision for environmental justice and action.
2025-01-17 03:17:53.031 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.002 | Max budget: $10.000 | Current cost: $0.002, prompt_tokens: 170, completion_tokens: 69
2025-01-17 03:17:53.035 | INFO     | metagpt.roles.role:_act:403 - A(Democratic candidate): to do Action(Say)
2025-01-17 03:17:53.049 | INFO     | metagpt.roles.role:_act:403 - B(Republican candidate): to do Action(Say)
2025-01-17 03:17:53.062 | INFO     | metagpt.roles.role:_act:403 - C(Voter): to do Action(Vote)
B: Climate change is a pressing issue that requires thoughtful solutions. We must prioritize innovation and market-based approaches to protect our environment while fostering economic growth. Let's work together to find practicalI vote for the and effective strategies for a sustainable future.
2025-01-17 03:17:53.604 | INFO     | metagpt.utils.token_counter:count_input_tokens:433 - Warning: gpt-3.5-turbo may update over time. Returning num tokens assuming gpt-3.5-turbo-0125.
2025-01-17 03:17:53.605 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.003 | Max budget: $10.000 | Current cost: $0.001, prompt_tokens: 322, completion_tokens: 45
 Democratic candidate. The urgency of addressing climate change cannot be overstated, and the Democratic candidate's commitment to implementing bold policies and investing in renewable energy aligns with my values. Protecting our planet and ensuringAbsolutely, the urgency to act on climate a sustainable future is change cannot be overst essential, and Iated. believe that the Democratic candidate's Our communities approach to environmental justice and action is the right path forward.
2025-01-17 03:17:54.830 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.006 | Max budget: $10.000 | Current cost: $0.003, prompt_tokens: 324, completion_tokens: 70
, especially those most vulnerable, are already facing the dire consequences of inaction. We need a comprehensive approach that not only addresses the environmental impact but also ensures economic and social justice. Our policies will create jobs, build resilient infrastructure, and promote clean energy. This is about securing a livable world for our children and all future generations. We must be bold and decisive. It's our moral imperative to act now.
2025-01-17 03:17:59.590 | INFO     | metagpt.utils.cost_manager:update_cost:57 - Total running cost: $0.010 | Max budget: $10.000 | Current cost: $0.006, prompt_tokens: 338, completion_tokens: 99
@chen2438 ➜ /workspaces/MetaGPT-learn (main) $ 
```

