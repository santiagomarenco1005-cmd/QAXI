async function pedirPermisoYGuardarToken(email) {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Permiso concedido.');
            
            // --- ESTA ES LA PARTE QUE CORRIGE EL ERROR ---
            // Le decimos al navegador que el archivo está en /QAXI/
            const registration = await navigator.serviceWorker.register('/QAXI/firebase-messaging-sw.js', {
                scope: '/QAXI/'
            });
            
            const token = await getToken(messaging, { 
                vapidKey: vapidKey,
                serviceWorkerRegistration: registration // Usamos el registro que acabamos de hacer
            });
            // ----------------------------------------------

            if (token && email) {
                console.log("Token FCM guardado:", token);
                await updateDoc(doc(db, "chats", email), { fcmToken: token });
                btnNotif.style.display = 'none';
                alert("✅ Notificaciones activadas.");
            }
        } else {
            alert("⚠️ Has bloqueado las notificaciones.");
        }
    } catch (error) { 
        console.error('Error FCM:', error); 
        alert("Error activando notificaciones: " + error.message);
    }
}
