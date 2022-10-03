import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({

imports:[],
controllers: [],
exports: [PrismaService],
providers: [PrismaService]




})
export class PrismaModule {}
