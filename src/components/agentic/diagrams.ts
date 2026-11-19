// Mermaid sources for the agentic workflow page. Palette matches the data-profiler page.
const CLASS_DEFS = `
    classDef default fill:#1e293b,stroke:#475569,stroke-width:2px,color:#e0e7ff;
    classDef core fill:#4f46e5,stroke:#818cf8,stroke-width:2px,color:#ffffff;
    classDef db fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#93c5fd;
`;

export const RUN_CHART = `graph TD${CLASS_DEFS}
    BOOT["Scheduler boots the cloud instance"]:::core --> SYNC["git pull, code graph sync, refresh PR-history corpus"]
    SYNC --> SEL["LLM ticket selector"]
    SEL --> WT["Worktree per ticket, lowest unused port prefix, infrastructure up"]
    WT --> REQ["Requirement file with attachment text, plus prior-art file"]:::db
    REQ --> RUN["One orchestrator run per ticket"]:::core
    RUN --> READY["Ticket-ready hook"]
    READY --> STOP["Stop the instance"]:::core
    ERR["ERR trap"]:::db -.->|"also stops on failure"| STOP
`;

export const SELECTOR_CHART = `graph TD${CLASS_DEFS}
    LIST["Backlog and todo tickets for one user"]:::db --> F1["Drop blacklisted tickets"]
    F1 --> F2["Drop tickets that already have a worktree"]
    F2 --> SORT["Sort by due date and priority, critical and high bugs first"]
    SORT --> LLM["CLI agent: Claude or Codex"]:::core
    REF["Referenced tickets, context only"]:::db --> LLM
    LLM --> PICK["One urgent anchor plus up to N-1 independent tickets"]:::core
    UNT["Ticket content treated as untrusted data"]:::db -.-> LLM
`;

export const TOPOLOGY_CHART = `graph TD${CLASS_DEFS}
    ORCH["Orchestrator agent"]:::core
    ORCH --> PLAN["planner"]
    ORCH --> IMPL["implement"]
    ORCH --> REV["reviewer"]
    ORCH --> BT["browser-tester"]
    ORCH --> PRE["pre-pr-runner"]
    ORCH --> BUG["bug-analyzer"]
    ORCH --> DD["data-detective"]
    ORCH --> ADV["advisor"]
    ORCH --> EXP["explorer"]
    ORCH --> DEL["delivery"]
    CP[("Scratch checkpoint files")]:::db -.->|"interrupted agents resume"| ORCH
    LOCK[("Global gate lock")]:::db -.->|"one gate at a time"| PRE
    MEM[("Memory MCP")]:::db -.-> PLAN
    MEM -.-> ADV
    MEM -.-> IMPL
    MEM -.-> BT
    MEM -.-> DD
    DEPTH["Max sub-agent depth 2, constrained spawning rules"] -.-> ORCH
`;

export const DELIVERY_CHART = `graph TD${CLASS_DEFS}
    PF["PR preflight"] --> MT["Merge-conflict check with git merge-tree"]
    MT --> Q{"Conflicts?"}
    Q -->|"none"| GATES["Re-run pre-PR gates"]
    Q -->|"strictly mechanical"| MERGE["Merge target into source, never rebase or force-push"]:::core
    Q -->|"intent-bearing"| BACK["Hand back"]
    MERGE --> GATES
    GATES --> PR["Pull request"]:::core
    PR --> POLICY{"Task type"}
    POLICY -->|"review built into pipeline"| AUTO["Auto-merge"]:::core
    POLICY -->|"otherwise"| HUMAN["Human review"]
`;

export const MONITOR_CHART = `graph LR${CLASS_DEFS}
    SESS["Agent sessions and transcripts"]:::db --> MON["Stall monitor sweep"]:::core
    MON -->|"stalled"| HEAL["Auto-heal: ping the session"]
    MON --> DASH["Dashboard: per-ticket state, token cost per thread"]:::db
    HOOK["Ticket-ready hook"] -->|"marks ticket INACTIVE, idempotent"| MON
    PHONE["Phone via remote control"] --> PA["PA supervisor session"]:::core
    PA -->|"reads fleet"| OPS["Ops MCP server: fleet status, ticket activity"]:::db
    OPS -.-> MON
`;

export const PARALLEL_CHART = `graph TD${CLASS_DEFS}
    REPO["Repository"]:::core
    REPO --> WA["Worktree: ticket A"]
    REPO --> WB["Worktree: ticket B"]
    REPO --> WC["Worktree: ticket C"]
    REPO --> WD["Worktree: ticket D"]
    WA --> CA["docker-compose + Caddy on port prefix 1"]:::db
    WB --> CB["docker-compose + Caddy on port prefix 2"]:::db
    WC --> CC["docker-compose + Caddy on port prefix 3"]:::db
    WD --> CD["docker-compose + Caddy on port prefix 4"]:::db
    CA --- SA["Agent run A"]
    CB --- SB["Agent run B"]
    CC --- SC["Agent run C"]
    CD --- SD["Agent run D"]
`;

export const TMUX_CHART = `graph LR${CLASS_DEFS}
    subgraph TMUX["tmux session, one per worktree"]
        P1["Pane 1: shell"]
        P2["Pane 2: Claude Code"]
        P3["Pane 3: Claude Code with custom Agents.md"]
        P4["Pane 4: neovim + lazygit"]
    end
    CLI["Small CLI"]:::core -->|"opens layout, manages worktrees"| TMUX
`;

export const CONTEXT_CHART = `graph TD${CLASS_DEFS}
    PORTAL[("Ticket portal")]:::db -->|"incremental sync"| STORE[("Shared Postgres corpus")]:::db
    ADO[("Azure DevOps PRs")]:::db -->|"incremental sync, recent PRs re-ingested each run"| STORE
    DESC["Current ticket description"] -->|"hand-written BM25"| STORE
    STORE --> EV["Ranking, git and ticket-link evidence, kept apart from inference notes"]
    EV --> PAMD["prior-art.md"]:::core
    DESC -->|"mentions another ticket id"| FETCH["Fetch that ticket description"]
    FETCH --> PAMD
    PAMD --> ORCH["Orchestrator agent"]:::core
    REQMD["requirement.md"]:::core --> ORCH
    EVAL["Retrieval evals with ablation"]:::db -.->|"measure quality"| STORE
`;

export const REQUIREMENT_CHART = `graph TD${CLASS_DEFS}
    T["Ticket title, description, comments"] --> MD["requirement.md"]:::core
    ATT["Attachments downloaded"] --> KIND{"Type"}
    KIND -->|"PDF"| DX["doc-extract MCP: text extraction + OCR for images"]
    KIND -->|"Image"| OCR["OCR"]
    DX -->|"appended"| MD
    OCR -->|"appended"| MD
`;

export const PROVENANCE_CHART = `graph LR${CLASS_DEFS}
    CODE["Line of code"] --> COMMIT["git commit"]
    COMMIT --> PR["Introducing PR (squash merged)"]
    PR --> TID["Ticket id"]
    TID --> DESC["Ticket description"]:::core
    DESC --> AGENT["Agent learns origin and intent"]:::db
`;

export const MEMORY_CHART = `graph LR${CLASS_DEFS}
    AG["Agent with its own id"]:::core -->|"search"| MCP["Memory MCP server"]:::db
    MCP --> Q[("Vector store")]:::db
    AG -->|"create, update, merge"| MCP
    AG -->|"record_memory_use"| MCP
    AG -->|"record_memory_outcome"| MCP
`;

export const QA_CHART = `graph LR${CLASS_DEFS}
    TEST["QA agent tests the app"]:::core --> REC["Records video"]
    REC --> CH["Splits into chapters"]
    CH --> NAR["Adds audio narration"]
    NAR --> OUT["Narrated evidence video"]:::db
`;

export const RELEASE_CHART = `graph TD${CLASS_DEFS}
    HOOK["Azure DevOps service hook on stage completion"]:::db --> FN["Azure Function (Python)"]:::core
    FN --> AUTH["Validate shared secret, filter by stage"]
    AUTH --> DIFF["Deployment history: current minus previous successful = newly deployed builds"]
    DIFF --> PRS["Build to PR to full PR description"]
    PRS --> LINK["All Asana task links in the description"]
    LINK --> STAGE{"Stage"}
    STAGE -->|"UAT"| UAT["Move to UAT / Awaiting Deployment"]:::db
    STAGE -->|"PROD"| PROD["Move to Deployed and mark complete"]:::db
`;

export const NOTES_CHART = `graph LR${CLASS_DEFS}
    REL["Azure DevOps releases, backend and frontend"]:::db --> BLD["Builds"]
    BLD --> PR["PRs with full descriptions"]
    PR --> TASK["Asana tasks: title and assignee, multiple per release"]
    TASK --> MAP["Assignee mapped to Slack user"]
    MAP --> DM["Slack Block Kit DM"]:::core
    CFG["Per-project config, blocked repos excluded"]:::db -.-> BLD
`;
