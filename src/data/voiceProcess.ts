export interface VoiceProcessStep {
  stepNumber: string;
  phase: "Dictation" | "Generation" | "Iteration & Refinement" | "Outcome & Verification";
  title: string;
  voicePrompt: string;
  spokenDuration: string;
  wpm: number;
  outputDescription: string;
  codeOrArtifactSnippet: string;
  correctionsMade: string[];
  keyInsight: string;
  isExampleReconstruction: boolean;
}

export const VOICE_PROCESS_WORKFLOW: VoiceProcessStep[] = [
  {
    stepNumber: "01",
    phase: "Dictation",
    title: "Initial Architectural Intent Dictated via Wispr Flow",
    voicePrompt:
      "\"Hey, I need a closed-loop revenue recovery state machine for Razorpay merchants. Let's make sure that whenever a payment failed webhook arrives, we don't blindly retry it. We first calculate the expected value in paise — factoring in the recovery probability based on bank downtime and gateway fee. If EV is positive and policy checks pass, pick the optimal retry strategy using Gemini Flash. Otherwise, park it without burning gateway fees. Make the webhook verification cryptographically strict with HMAC SHA256.\"",
    spokenDuration: "28 seconds",
    wpm: 154,
    outputDescription:
      "Captured unstructured spoken thought stream transformed into a structured technical requirement and mathematical decision tree within seconds.",
    codeOrArtifactSnippet: `// Deterministic Expected Value Formula
// EV = (P_recovery * Order_Value_Paise) - (Gateway_Retry_Cost_Paise + Customer_Fatigue_Cost)
export function computeRecoveryEV(orderPaise: number, pRecovery: number, feePaise: number): number {
  const fatiguePenaltyPaise = 500; // 5 INR friction cost
  const expectedReturn = pRecovery * orderPaise;
  const totalCost = feePaise + fatiguePenaltyPaise;
  return Math.round(expectedReturn - totalCost);
}`,
    correctionsMade: [
      "Voice model correctly formatted 'HMAC SHA256' instead of phonetic spelling",
      "Auto-formatted 'paise-precision' as mathematical financial unit",
    ],
    keyInsight:
      "Speaking the architectural boundary aloud unblocks complex decision logic 3x faster than writing boilerplate syntax manually.",
    isExampleReconstruction: true,
  },
  {
    stepNumber: "02",
    phase: "Generation",
    title: "Synthesizing the State Machine & Policy Gates",
    voicePrompt:
      "\"Now build the deterministic state machine. Define states: WEBHOOK_RECEIVED, EV_EVALUATED, POLICY_CHECKED, RETRY_DISPATCHED, RECOVERED, and TERMINAL_DROP. Add hard policy guardrails: max 3 retry attempts, minimum 15 minute backoff window, and check that the customer has not received more than 2 notifications in 24 hours.\"",
    spokenDuration: "21 seconds",
    wpm: 162,
    outputDescription:
      "Direct code synthesis generating strict TypeScript enum definitions, transition validators, and policy guardrails.",
    codeOrArtifactSnippet: `export type RecoveryState = 
  | 'WEBHOOK_RECEIVED'
  | 'EV_EVALUATED'
  | 'POLICY_CHECKED'
  | 'RETRY_DISPATCHED'
  | 'RECOVERED'
  | 'TERMINAL_DROP';

export interface PolicyGate {
  maxAttempts: 3;
  minBackoffMinutes: 15;
  dailyNotificationCap: 2;
}`,
    correctionsMade: [
      "Converted dictated '15 minute backoff' into typed constants",
      "Bound transitions to prevent illegal jumps from DROP to RECOVERED",
    ],
    keyInsight:
      "Constraint specification by voice prevents cognitive drift — speaking guardrails forces clear boundary thinking.",
    isExampleReconstruction: true,
  },
  {
    stepNumber: "03",
    phase: "Iteration & Refinement",
    title: "Iterative Edge Case Correction",
    voicePrompt:
      "\"Wait, what if Razorpay sends duplicate webhooks for the exact same event ID? We must enforce idempotency. Dictate a Redis atomic key check or a deterministic memory ledger before any EV calculation fires. If the event ID already exists in the ledger, return HTTP 200 immediately and skip.\"",
    spokenDuration: "19 seconds",
    wpm: 158,
    outputDescription:
      "Immediate conversational iteration catching edge case vulnerability without breaking creative momentum.",
    codeOrArtifactSnippet: `export function checkIdempotency(eventId: string, ledger: Set<string>): boolean {
  if (ledger.has(eventId)) {
    return false; // Duplicate event, skip processing
  }
  ledger.add(eventId);
  return true;
}`,
    correctionsMade: [
      "Captured immediate thought correction mid-flow",
      "Preserved idempotent response semantics (200 OK)",
    ],
    keyInsight:
      "Voice iteration allows rapid refactoring at the speed of thought without context switching between code and documentation.",
    isExampleReconstruction: true,
  },
  {
    stepNumber: "04",
    phase: "Outcome & Verification",
    title: "Final Shipped Artifact & Production Verification",
    voicePrompt:
      "\"Run the test suite on the recovery engine. Simulate 100 failed webhook payloads across HDFC UPI drop, ICICI card gateway timeout, and duplicate events. Verify that duplicate events exit early, negative EV events drop cleanly, and positive EV events transition to RETRY_DISPATCHED.\"",
    spokenDuration: "24 seconds",
    wpm: 165,
    outputDescription:
      "100% verified deterministic pipeline deployed into MerchantPulse live production architecture.",
    codeOrArtifactSnippet: `// Verification Result
// 100 Webhooks Ingested:
// 12 Duplicates Filtered (Idempotent 200 OK)
// 31 Negative EV Dropped (Gateway Fee Saved)
// 57 Positive EV Dispatched (Strategy Executed)
// Zero Out-of-Bound Transitions`,
    correctionsMade: [
      "Integrated with live Next.js API route",
      "Added HMAC cryptographic signature validation with timing-safe comparison",
    ],
    keyInsight:
      "From vocalized concept to deployed financial recovery state machine in minutes — moving at the true velocity of thought.",
    isExampleReconstruction: true,
  },
];

