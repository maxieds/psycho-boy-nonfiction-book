// Formulae to compute derived counters from raw counter values

function GPUUtilization()
{
	return (GPU_BusyTics * 100.0) / GPU_CoreClocks;
}

function ShaderCoreActive()
{
	return ((EuActive_Flex0 * 100.0) / EUCoreCount) / GPU_BusyTics;
}

function ShaderCoreStall()
{
	return ((EuStall_Flex1 * 100.0) / EUCoreCount)/ GPU_BusyTics;
}

function DRAMBW()
{
	return (DRAMReads + DRAMWrites ) * 64 / ( GPU_delta_timestamp * 8333e-11 ) / 1e9
}

function PixelShaderInvocations()
{
	return PsInvocations;
}

function VertexShaderInvocations()
{
	var vertexInvocations = VsInvocations;
	if (VsInvocations == 0)
	{
		//Must be a Tessellated draw, return DS invocations
		vertexInvocations = DsInvocations;
	}
	return vertexInvocations;
}

function NumberOfPatches()
{
	return HsInvocations;
}

function TessFactor()
{
	return (HsInvocations > 0) ? (VertexShaderInvocations()/(TessDomain*HsInvocations)) : 0;
}

function ComputeShaderInvocations()
{
	return CsInvocations;
}

function PixelToVertexRatio()
{
    return (VerticesSubmitted() > 0) ? (Pixels_2x2_Rasterized * 4 / VerticesSubmitted()) : 0;
}

function PixelsPerPrimitive()
{
    return PrimitivesSubmitted() > 0 ? (Pixels_2x2_Rasterized * 4  / PrimitivesSubmitted()) : 0;
}

function VerticesSubmitted()
{
    return (HsInvocations > 0) ? VertexShaderInvocations() : IAVertices;
}

function VerticesPerClock()
{
	return VerticesSubmitted() / GPU_BusyTics;
}

function VerticesRendered()
{
    var vertRendered;
    if (HsInvocations > 0)
    {
        vertRendered = ClipperPrimitives;
    }
    else
    {
        vertRendered = (ClipperPrimitives * IAVertices)/IAPrimitives;
    }
    return vertRendered;
}

function VerticesRenderedPercent()
{
	return (VerticesRendered() * 100) / VerticesSubmitted();
}

function PrimitivesSubmitted()
{
    return (HsInvocations > 0) ? (VertexShaderInvocations()/TessDomain) : IAPrimitives;
}

function PrimitivesClipped()
{
    var primClipped;
    if (HsInvocations > 0)
    {
        if(VertexShaderInvocations() > ClipperPrimitives)
    	{
        	primClipped = (VertexShaderInvocations() - ClipperPrimitives)/TessDomain;
        }
        else
        {
        	primClipped = (ClipperPrimitives - VertexShaderInvocations())/TessDomain;
        }
    }
    else
    {
        primClipped = (IAPrimitives > ClipperPrimitives) ? (IAPrimitives - ClipperPrimitives) : (ClipperPrimitives - IAPrimitives);
    }
    return primClipped;
}

function PrimitivesClippedPercent()
{
	return (PrimitivesClipped() * 100) / PrimitivesSubmitted();
}

function PrimitivesRendered()
{
    return (HsInvocations > 0) ? (ClipperPrimitives/TessDomain) : ClipperPrimitives;
}

function PrimitivesRenderedPercent()
{
	return (PrimitivesRendered() * 100) / PrimitivesSubmitted();
}

function PixelsRasterized()
{
	return (Pixels_2x2_Rasterized * 4);
}

function PixelsFailingHiZ()
{
	return (Pixels_2x2_Fail_HiZ_PrePS + Pixels_2x2_Fail_Early_PrePS) * 4;
}

function PixelsFailingHiZPercent()
{
	return (PixelsFailingHiZ() * 100)/ PixelsRasterized();
}

function PixelsFailingPostPS()
{
	return Pixels_2x2_Fail_PostPS * 4;
}

function PixelsFailingPostPSPercent()
{
	return (PixelsFailingPostPS() * 100)/ PixelsRasterized();
}


function PixelsWrittenToMemory()
{
	var PixelQuadsWrittenOut = Samples_2x2_Written >=  Samples_2x2_Blended_Written ? Samples_2x2_Written : Samples_2x2_Blended_Written;
	return PixelQuadsWrittenOut * 4;
}

function PixelsProcessed()
{
	return PixelsRasterized() - PixelsFailingHiZ();
}

function PixelsProcessedPercent()
{
	return PixelsProcessed() * 100 / PixelsRasterized();
}

function PixelsDiscarded()
{
	return Samples_2x2_Killed_PS * 4;
}

function PixelsDiscardedPercent()
{
	return PixelsDiscarded() * 100 / PixelsRasterized();
}

function PixelsWrittenPerClock()
{
	return (PixelsWrittenToMemory() / GPU_BusyTics);
}


function TextureUnitBusy()
{
	return (Sampler00Busy * 100.0) / GPU_BusyTics;
}

function TextureUnitStalled()
{
	return (Sampler00Bottleneck * 100.0) / GPU_BusyTics;
}

function L3HitRate()
{
	var L3LookUps = Shader_HDC_MemoryAccess + (SamplerL3Throughput() / 64);
	var L3Misses = L3GtiThroughput() / 64;
	return (1 - (L3Misses/L3LookUps)) * 100.0;
}

function ALULimiter()
{
	return EuActive / EUCoreCount / GpuCoreClocks;
}

function ALUStall()
{
	return EuStall / EUCoreCount / GpuCoreClocks;
}

function Sampler0Limiter() 
{
	return Sampler00Busy / GpuCoreClocks;
}

function PixelsWritten()
{
	return SamplesWritten * 4;
}

function PixelsBlended()
{
	return SamplesBlended * 4;
}

function SharedLocalMemoryReadBytes() 
{
	return SlmBytesRead * 64;
}

function SharedLocalMemoryWriteBytes() 
{
	return SlmBytesWritten * 64;
}

function GtiReadBytes() 
{
	return GtiReadThroughput * 64;
}

function GtiWriteBytes() 
{
	return GtiWriteThroughput * 64;
}

