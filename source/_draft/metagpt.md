---
description: 发布于 2024-12-30
categories:
- ai
date: 2024-12-30
slug: metagpt
title: MetaGPT 项目使用记录
updated: 
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

## 智能体入门

### 使用现成的智能体

```python
# 可导入任何角色，初始化它，用一个开始的消息运行它，完成！
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
Filename: MetaGPT/examples/build_customized_agent.py
Created Date: Tuesday, September 19th 2023, 6:52:25 pm
Author: garylin2099
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
    PROMPT_TEMPLATE: str = """
    Write a python function that can {instruction} and provide two runnable test cases.
    Return ```python your_code_here ``` with NO other texts,
    your code:
    """

    name: str = "SimpleWriteCode"

    async def run(self, instruction: str):
        prompt = self.PROMPT_TEMPLATE.format(instruction=instruction)
        rsp = await self._aask(prompt)
        code_text = SimpleWriteCode.parse_code(rsp)
        return code_text

    @staticmethod
    def parse_code(rsp):
        pattern = r"```python(.*)```"
        match = re.search(pattern, rsp, re.DOTALL)
        code_text = match.group(1) if match else rsp
        return code_text


class SimpleRunCode(Action):
    name: str = "SimpleRunCode"

    async def run(self, code_text: str):
        result = subprocess.run(["python3", "-c", code_text], capture_output=True, text=True)
        code_result = result.stdout
        logger.info(f"{code_result=}")
        return code_result


class SimpleCoder(Role):
    name: str = "Alice"
    profile: str = "SimpleCoder"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteCode])

    async def _act(self) -> Message:
        logger.info(f"{self._setting}: to do {self.rc.todo}({self.rc.todo.name})")
        todo = self.rc.todo  # todo will be SimpleWriteCode()

        msg = self.get_memories(k=1)[0]  # find the most recent messages
        code_text = await todo.run(msg.content)
        msg = Message(content=code_text, role=self.profile, cause_by=type(todo))

        return msg


class RunnableCoder(Role):
    name: str = "Alice"
    profile: str = "RunnableCoder"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.set_actions([SimpleWriteCode, SimpleRunCode])
        self._set_react_mode(react_mode=RoleReactMode.BY_ORDER.value)

    async def _act(self) -> Message:
        logger.info(f"{self._setting}: to do {self.rc.todo}({self.rc.todo.name})")
        # By choosing the Action by order under the hood
        # todo will be first SimpleWriteCode() then SimpleRunCode()
        todo = self.rc.todo

        msg = self.get_memories(k=1)[0]  # find the most k recent messages
        result = await todo.run(msg.content)

        msg = Message(content=result, role=self.profile, cause_by=type(todo))
        self.rc.memory.add(msg)
        return msg


def main(msg="write a function that calculates the product of a list and run it"):
    # role = SimpleCoder()
    role = RunnableCoder()
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

