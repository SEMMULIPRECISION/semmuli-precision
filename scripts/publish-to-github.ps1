\
Param(
  [string]$RepoUrl = ""
)

Write-Host "== SEMMULI: Publicar en GitHub ==" -ForegroundColor Cyan
git --version | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Error "Git no está instalado. Instala con: winget install --id Git.Git -e"
  exit 1
}

$hasPackage = Test-Path "./package.json"
if (-not $hasPackage) {
  Write-Error "No se encontró package.json. Debes ejecutar esto en la carpeta del proyecto."
  exit 1
}

git init
git add .
git commit -m "Inicializa repo: CI + Vercel config" 2>$null
git branch -M main

if ($RepoUrl -eq "") {
  Write-Host "No se proporcionó RepoUrl. Puedes configurarlo manualmente con:" -ForegroundColor Yellow
  Write-Host "  git remote add origin https://github.com/USUARIO/REPO.git"
  Write-Host "  git push -u origin main"
} else {
  git remote add origin $RepoUrl 2>$null
  git push -u origin main
}

Write-Host "Listo. Revisa tu repo en GitHub y conecta en https://vercel.com (Add New → Project)." -ForegroundColor Green
