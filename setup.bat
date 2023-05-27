@echo off
set a=%~dp0
echo.
echo.
schtasks /CREATE /SC ONLOGON /TN "KKU-AUTOLOGON" /TR "%a%login.bat"

if %ERRORLEVEL% equ 1 goto fail
if %ERRORLEVEL% equ 0 goto okay

:fail
echo ---
echo Please run as Admin
echo ---
pause
exit
:okay
echo ---
echo Setup successfully.
echo ---
echo.
timeout -t 5