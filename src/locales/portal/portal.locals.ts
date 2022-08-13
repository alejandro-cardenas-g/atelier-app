export const PORTAL_LOCALS = {
    home: {
        title: '¡Bienvenido!',
        text: '¿Qué deseas hacer hoy?',
        options: {
            newEquipment: {
                name: "newEquipment",
                title: 'Nuevo Equipo',
                text: 'Registra un nuevo equipo, completa su información y anexa todos sus documentos.',
                buttonText: 'Nuevo Equipo'
            },
            recentEvents: {
                name: "recentEvents",
                title: 'Últimos eventos',
                text: 'Visualizar los últimos eventos, sus detalles y equipos asociados.',
                buttonText: 'Últimos eventos'
            },
            newEvent: {
                name: "newEvent",
                title: 'Nuevo Evento',
                text: 'Crea un nuevo evento y asigna al usuario responsable de realizarlo.',
                buttonText: 'Nuevo Evento'
            }
        }
    },
    users: {
        tableColumns: {
            name: {
                title: 'Nombre',
                dataIndex: 'name'
            },
            type: {
                title: 'Posición',
                dataIndex: 'type'    
            },
            email: {
                title: 'Email',
                dataIndex: 'email' 
            },
            dropdown: {
                title: '',
                dataIndex: 'dropdown'
            }
        },
        info: {
            title: 'Administración - Usuarios',
            buttonNew: 'Nuevo Usuario',
            back: 'Atras'
        },
        registry: {
            form: {
                infoRequired: 'Información requerida',
                name: {
                    placeholder: 'Nombre(s)*',
                    ariaLabel: 'Nombres',
                    validators: {
                        required: 'El nombre es obligatorio'
                    }
                },
                lastname: {
                    placeholder: 'Apellido(s)*',
                    ariaLabel: 'Apellidos',
                    validators: {
                        required: 'Los apellidos son obligatorios'
                    }
                },
                area: {
                    placeholder: 'Seleccione el Área*',
                    validators: {
                        required: 'El área es obligatoria'
                    }
                },
                job: {
                    placeholder: 'Cargo*',
                    ariaLabel: 'Cargo',
                    validators: {
                        required: 'El cargo es obligatorio'
                    }
                },
                email: {
                    placeholder: 'Email*',
                    ariaLabel: 'Email',
                    validators: {
                        required: 'El Correo es obligatorio',
                        email: 'El email debe ser válido'
                    }
                },
                password: {
                    placeholder: 'Contraseña*',
                    ariaLabel: 'Contraseña',
                    validators: {
                        required: 'La contraseña es obligatoria',
                        min: 'La contraseña debe tener al menos 8 caracteres',
                        matches: 'La contraseña debe contener números, mayúsculas y minúsculas'
                    }
                },
                infoAdditional: 'Información adicional',
                address: {
                    placeholder: 'Dirección',
                    ariaLabel: 'Dirección',
                },
                phone: {
                    placeholder: 'Teléfono',
                    ariaLabel: 'Teléfono'
                },
                file: {
                    text: 'Subir documento de identidad'
                },
                button: 'Crear usuario'
            },
            modal: {
                copied: 'Copiado',
                button: 'Copiar y cerrar',
                text: 'Esta información es importante, copiela y compartala con quien requiera.',
                email: 'Email: ',
                password: 'Contraseña: ',
                name: 'Nombre: ',
                title: 'Información del usuario'
            }
        },
        details: {
            form: {
                saveButton: 'Guardar'
            },
            basic: {
                description: 'Información Básica'
            },
            contact: {
                description: 'Información de contacto'
            },
            security: {
                description: 'Seguridad'
            }
        }
    },
    clients: {
        info: {
            title: 'Administración - Clientes',
            buttonNew: 'Nuevo Cliente',
            back: 'Atras'
        },
    }
}