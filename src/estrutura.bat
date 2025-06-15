@echo off
setlocal enabledelayedexpansion

rem Caminho base onde o script está
set "BASE_DIR=%cd%"

rem Arquivo de saída
set "OUTPUT=estrutura.txt"
if exist "%OUTPUT%" del "%OUTPUT%"

rem Loop por todos os arquivos
for /r %%f in (*) do (
    set "FILE=%%f"
    rem Remove o caminho base da frente e converte para barra normal
    set "FILE=!FILE:%BASE_DIR%\=!"
    set "FILE=!FILE:\=/!"
    echo !FILE!>>"%OUTPUT%"
)

type "%OUTPUT%"
echo.
echo Estrutura salva em: %OUTPUT%
pause
