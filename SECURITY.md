# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | ✅                 |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please follow these steps:

1. **Do not** open a public issue
2. Contact the project maintainers directly at [your-email@example.com](mailto:your-email@example.com)
3. Include the following information in your report:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Best Practices

### For Users
- Keep environment variables secure (`.env` files should not be committed)
- Use strong admin passwords
- Regularly update dependencies
- Review access logs when possible

### For Developers
- Never commit sensitive credentials to the repository
- Validate all user inputs on both frontend and backend
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Sanitize user-generated content
- Use HTTPS in production

## Current Security Measures

- Environment variables for sensitive data
- Session-based admin authentication
- Input validation on forms
- Supabase security policies (to be configured)

## Areas for Improvement

- Implement proper password hashing instead of plain text storage
- Add rate limiting for login attempts
- Implement more robust session management
- Add input sanitization for user-generated content
- Configure Supabase Row Level Security (RLS) policies

## Dependency Security

Regularly audit dependencies using:
```bash
npm audit
```

Update dependencies regularly:
```bash
npm update
```

## Data Protection

- Customer data is stored securely in Supabase
- Passwords should be encrypted (currently stored as plain text - this is a known issue to be fixed)
- Personal information access is limited to authenticated administrators

## Security Updates

Security updates are prioritized and addressed as soon as possible. Subscribe to repository notifications to stay informed about security updates.