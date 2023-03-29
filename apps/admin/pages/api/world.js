import { createClient } from "@supabase/supabase-js";
import { UserAuthorization } from 'database/utils/user-auth';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default UserAuthorization(async function worldsHandler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { name, description, logo_url } = req.body;

        if (!name) {
          return res.status(400).json({
            status: 400,
            message: "Name is required.",
          });
        }

        const { data, error } = await supabase
          .from("worlds")
          .insert([{ name, description, logo_url }])
          .select();

        if (error) {
          throw error;
        }

        return res.status(201).json({
          status: 201,
          message: "World created successfully",
          data,
        });

      case "PUT":
        const { id, ...world } = req.body;

        if (!id) {
          return res.status(400).json({
            status: 400,
            message: "ID field is required.",
          });
        }

        const { data: updatedData, error: updateError } = await supabase
          .from("worlds")
          .update(world)
          .eq("id", id)
          .select();

        if (updateError) {
          throw updateError;
        }

        if (!updatedData || updatedData.length === 0) {
          return res.status(404).json({
            status: 404,
            message: `World with ID ${id} not found`,
          });
        }

        return res.status(200).json({
          status: 200,
          message: "World updated successfully",
          data: updatedData[0],
        });

      case "GET":
        const { id: worldId } = req.query;

        if (worldId) {
          const { data: singleWorld, error: singleWorldError } = await supabase
            .from("worlds")
            .select("*")
            .eq("id", worldId)
            .limit(1);

          if (singleWorldError) {
            throw singleWorldError;
          }

          if (!singleWorld || singleWorld.length === 0) {
            return res.status(404).json({
              status: 404,
              message: `World with ID ${worldId} not found`,
            });
          }

          return res.status(200).json({
            status: 200,
            message: "World fetched successfully",
            data: singleWorld[0],
          });
        }

        const { data: allWorlds, error: allWorldsError } = await supabase
          .from("worlds")
          .select("*");

        if (allWorldsError) {
          throw allWorldsError;
        }

        return res.status(200).json({
          status: 200,
          message: "Worlds fetched successfully",
          data: allWorlds,
        });

      case "DELETE":
        const { id: worldToDelete } = req.body;

        if (!worldToDelete) {
          return res.status(400).json({
            status: 400,
            message: "ID field is required.",
          });
        }

        const { data: deletedData, error: deleteError } = await supabase
          .from("worlds")
          .delete()
          .eq("id", worldToDelete).select();

        if (deleteError) {
          throw deleteError
        }

        if (deletedData && deletedData.length > 0) {
            return res.status(200).json({
              status: 200,
              message: "World deleted successfully",
              data:deletedData
            });
        } else {
        return res.status(404).json({
            status: 404,
            message: `World with ID ${worldToDelete} not found`,
        });
        }
    }
    }
    catch(err){
        console.log(err);
    }
});
