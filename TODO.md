# TODO.md - Simple Guild Tracker Improvements

## Remaining Improvements

1. **Add Input Validation**
   - Create validation functions following codebase patterns (`isNull`, `isUndefined`)
   - Add `validateMemberData(member)`, `validateProfileData(prof)` functions

2. **Immutable Updates**
   - Follow codebase patterns for data updates
   - Avoid direct mutation of `guildData.members`
   - Consider returning new objects instead of mutating existing ones
