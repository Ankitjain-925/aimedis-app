import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function servers(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { name, description, ip_address, max_member_count, world_id, building_id } = req.body;
        const { data: newServer, error: insertError } = await supabase
          .from("servers")
          .insert({
            name,
            description,
            ip_address,
            max_member_count,
            world_id,
            building_id,
          })
          .select();

        console.log(newServer[0].id , 'idddd')  

        if (world_id){
          const { data: updatedData, error: updateError } = await supabase
          .from("worlds")
          .update({'servers':[newServer[0].id]})
          .eq("id", world_id)
          .select();
        }  

        conslo

        if (insertError) {
          throw insertError;
        }

        return res.status(200).json({
          status: 200,
          message: "Server created successfully",
          data: newServer,
        });
      } catch (error) {
        return res.status(500).json({
          status: 500,
          message: "Error creating server",
          error: error.message,
        });
      }

    case "PUT":
      try {
        const { id, name, description, ip_address, max_member_count, world_id, building_id } = req.body;
        const { data: updatedServer, error: updateError } = await supabase
          .from("servers")
          .update({
            name,
            description,
            ip_address,
            max_member_count,
            world_id,
            building_id,
          })
          .eq("id", id)
          .single();

        if (updateError) {
          throw updateError;
        }

        return res.status(200).json({
          status: 200,
          message: "Server updated successfully",
          data: updatedServer,
        });
      } catch (error) {
        return res.status(500).json({
          status: 500,
          message: "Error updating server",
          error: error.message,
        });
      }

    case "GET":
      try {
        const { id } = req.query;
        const { data: servers, error: selectError } = id
          ? await supabase.from("servers").select().eq("id", id).single()
          : await supabase.from("servers").select("*");

        if (selectError) {
          throw selectError;
        }

        return res.status(200).json({
          status: 200,
          message: "Servers fetched successfully",
          data: servers,
        });
      } catch (error) {
        return res.status(500).json({
          status: 500,
          message: "Error fetching servers",
          error: error.message,
        });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        const { data: deletedData, error: deleteError } = await supabase
          .from("servers")
          .delete()
          .eq("id", id)
          .select();

        if (deleteError) {
          throw deleteError;
        }

        if (deletedData && deletedData.length > 0) {
          return res.status(200).json({
            status: 200,
            message: "Server deleted successfully",
            data: deletedData,
          });
        } else {
          return res.status(404).json({
            status: 404,
            message: `Server with ID ${id} not found`,
          });
        }
      } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Error deleting server",
            error: error.message,
          });
        }
    }
}

         
