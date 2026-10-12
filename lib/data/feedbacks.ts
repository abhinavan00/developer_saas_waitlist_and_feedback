type Feedback = {
    id: number,
    title: string,
    description: string,
    userName: string,
    category: 'bug' | 'feature' | 'enhancement',
    status: 'planned' | 'under-review' | 'in-progress' | 'shipped',
    upvotes: number,
    createdAt: string | Date 
}

export const feedbacks: Feedback[] = [
    {
        id: 1,
        title: 'Native OpenTelemetry Collector exporter',
        description: 'Provide a zero-overhead OTLP gRPC endpoint straight from DevPulse daemon instances without sidecar proxy memory footprint.',
        userName: 'karl_sys',
        category: 'feature',
        status: 'in-progress',
        upvotes: 0,
        createdAt: new Date()
    },
    {
        id: 2,
        title: 'Terminal UI (TUI) client for Neovim / tmux users',
        description: 'A fast, cross-platform TUI application to inspect live service traces and crash dumps without leaving the terminal.',
        userName: 'matrix_core',
        category: 'feature',
        status: 'planned',
        upvotes: 0,
        createdAt: new Date()
    },
    {
        id: 3,
        title: 'High memory consumption during websocket trace bursts',
        description: 'Ring-buffer backpressure causes RSS memory of collector agents to climb steadily without dropping under high load.',
        userName: 'elena_infra',
        category: 'bug',
        status: 'under-review',
        upvotes: 0,
        createdAt: new Date()
    },
    {
        id: 4,
        title: 'GitHub Actions automated flamegraph comments',
        description: 'Run automated CPU benchmark profiles on PR branches and automatically render interactive differential flamegraphs.',
        userName: 'alex_dev',
        category: 'feature',
        status: 'planned',
        upvotes: 0,
        createdAt: new Date()
    },
    {
        id: 5,
        title: 'Self-hosted Docker Compose deployment recipe',
        description: 'One-click deployment manifest utilizing ClickHouse and Redis instances with pre-configured health checks.',
        userName: 'sarah_ops',
        category: 'enhancement',
        status: 'shipped',
        upvotes: 0,
        createdAt: new Date()
    }
]