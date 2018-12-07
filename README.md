# PG-Team-Modern-JS-Practices
Node JS From scratch - JS Mastery (May be) ✨

## ❗ NPM Behind A Proxy Server ❗
Using Proxy with NPM

Once you have obtained the proxy settings (server URL, port, username and password); you need to configure your npm configurations as follows.

```bash
npm config set proxy http://protalId:password@172.16.0.254:8080
```

```bash
npm config set https-proxy http://protalId:password@172.16.0.254:8080
```