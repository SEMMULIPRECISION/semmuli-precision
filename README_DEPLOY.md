# Deploy con GitHub y Vercel

Este paquete agrega archivos mínimos para que tu proyecto Next.js se pueda **validar en GitHub (CI)** y **desplegar en Vercel**.

## Archivos incluidos
- `vercel.json` — Config básico (Next.js es detectado automáticamente por Vercel)
- `.vercelignore` — Evita subir carpetas/pesados al deploy
- `.github/workflows/next-ci.yml` — Acciones de GitHub: lint/build en cada push
- `.github/workflows/vercel-deploy.yml` — (Opcional) Deploy automático a Vercel via CLI (requiere secretos)
- `scripts/publish-to-github.ps1` — Script de ayuda para inicializar y subir a GitHub

## Uso

### 1) Copia los archivos a la raíz del proyecto
Pon todo este paquete en la misma carpeta donde está `package.json` (tu proyecto Next.js).

### 2) Sube a GitHub
Abre PowerShell en la carpeta del proyecto y ejecuta:
```powershell
# (opcional) Ejecuta el script preparado
.\scripts\publish-to-github.ps1

# O manualmente:
git init
git add .
git commit -m "Inicializa repo: CI + Vercel config"
git branch -M main
git remote add origin https://github.com/<TUSUARIO>/<TU-REPO>.git
git push -u origin main
```

### 3) Conectar a Vercel (GUI recomendada)
1. Ve a https://vercel.com → **Add New... → Project** → **Import Git Repository** → selecciona tu repo.
2. Framework: **Next.js** (se detecta solo). Deja valores por defecto. **Deploy**.
3. (Opcional) En **Settings → Domains** agrega tu dominio y sigue las instrucciones DNS.

> Con esta integración, **cada push a main** dispara un **Preview** y/o **Production** sin configurar nada más.

### 4) (Opcional) Deploy con GitHub Actions + Vercel CLI
Si no quieres conectar Vercel a tu repo, puedes usar el workflow `vercel-deploy.yml`. Necesitas crear 3 **Secrets** en GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Luego, en tu repo de GitHub: **Settings → Secrets and variables → Actions → New repository secret** y agrega los valores.  
(Se obtienen desde la CLI `vercel` o desde el panel de Vercel).

Después, cada **push a main** ejecutará el build y deploy con Vercel CLI.

## ¿Problemas?
- Asegúrate de usar Node 18+.
- Si `npm` da error en PowerShell por políticas: usa `npm.cmd` o `Set-ExecutionPolicy -Scope Process Bypass`.
- En Vercel, si falla el build, revisa el tab **Build Logs**.
