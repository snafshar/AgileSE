# Test Strategy

## Risk-based test focus
Describe failures that would be most costly to users and prioritize tests around them.

## Test levels
| Level | Purpose | Owner / tool | Exit condition |
|---|---|---|---|
| Unit | Validate individual functions and invariants | | |
| Integration | Validate component contracts | | |
| System | Validate the complete workflow | | |
| Acceptance | Confirm user-facing outcomes | | |
| Performance | Check representative load and latency | | |

## Test data
Document how fixtures are generated, reset, and kept free of production personal data.

## CI and flakiness
Record which tests block merging, how intermittent failures are reported, and how a flaky test is quarantined and fixed.

## Release checks
List required checks, migration considerations, observability, and rollback steps.
