import { Injectable } from '@nestjs/common';
import { MetaDTO, MetaTrackingDTO } from 'src/models/meta';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class MetaService {
    constructor(private readonly prismaService: PrismaService,){

    }



    //Crear meta
    async createMeta(meta: MetaDTO) {
        try {
            const newMeta = await this.prismaService.meta.create({
                data: {
                    ...meta
                }
            });
            return {
                message: 'Meta creada con éxito',
                data: newMeta,
            };
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error(`Error al crear la meta: ${error.message}`);
        }
    }

    //Crear Seguimiento de meta por id de usuario y id de meta
    async createMetaTracking(metaTracking: MetaTrackingDTO) {
        try {
            const newMetaTracking = await this.prismaService.metaTracking.create({
                data: {
                    ...metaTracking
                }
            });
            return {
                message: 'Seguimiento de meta creado con éxito',
                data: newMetaTracking,
            };
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error(`Error al crear el seguimiento de meta: ${error.message}`);
        }
    }

    // Obtener todos los metas de un usuario
    async getMetaByUserId(userId: number) {
        const metas = await this.prismaService.meta.findMany({
            where: {
                user_id: userId,
            },
        });
        return {
            message: 'Metas cargadas con éxito',
            data: metas,
        };
    }


    

}
