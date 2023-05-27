@echo off
for /f "tokens=1,2 delims==" %%a in (config.ini) do (
if %%a==username set username=%%b
if %%a==password set password=%%b
)
 
echo %username%
echo %password%

pause